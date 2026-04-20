import { useMemo, useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, List, Map as MapIcon, SlidersHorizontal, X } from "lucide-react";
import { useEffect } from "react";
import { Header } from "@/components/zoolio/Header";
import { Footer } from "@/components/zoolio/Footer";
import { LocationCombobox } from "@/components/zoolio/LocationCombobox";
import { PetDetailsModal } from "@/components/zoolio/PetDetailsModal";
import { SitterCard } from "@/components/zoolio/SitterCard";
import { SitterMap } from "@/components/zoolio/SitterMap";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {
  SERVICE_CATEGORIES,
  TIME_SLOTS,
  TIME_SLOT_SERVICES,
  findSub,
  type SubServiceSlug,
} from "@/data/services";
import { SITTERS } from "@/data/sitters";
import { ATTR_LABELS, PET_SIZES, useSearchState } from "@/lib/search-state";
import { findLocation } from "@/data/locations";
import type { PetSize } from "@/components/zoolio/PetDetailsModal";

const Search = () => {
  const { state, update } = useSearchState();
  const [view, setView] = useState<"list" | "map">("list");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    document.title = `Zoolio Search — ${state.location || "South Africa"}`;
  }, [state.location]);

  const showTimeSlots = state.subs.some((s) => TIME_SLOT_SERVICES.has(s));

  const filtered = useMemo(() => {
    const locationMatch = state.location ? findLocation(state.location) : undefined;
    return SITTERS.filter((s) => {
      if (state.subs.length && !state.subs.some((sub) => s.services.includes(sub))) return false;
      if (locationMatch) {
        const sameSuburb = s.suburb === locationMatch.suburb;
        const sameCity = s.city === locationMatch.city;
        if (!sameSuburb && !sameCity) return false;
      } else if (state.location) {
        const q = state.location.toLowerCase();
        if (!s.suburb.toLowerCase().includes(q) && !s.city.toLowerCase().includes(q)) return false;
      }
      if (showTimeSlots && state.timeSlots.length) {
        if (!state.timeSlots.some((t) => s.availableTimeSlots.includes(t as any))) return false;
      }
      if (state.sizes.length && !state.sizes.some((sz) => s.acceptedSizes.includes(sz))) return false;
      for (const a of state.attrs) {
        if (!(s.attributes as any)[a]) return false;
      }
      return true;
    });
  }, [state, showTimeSlots]);

  const selectSub = (slug: SubServiceSlug) => {
    // Single-select: clicking the active chip clears it; otherwise replace selection.
    update({ subs: state.subs[0] === slug ? [] : [slug] });
  };
  const toggleSlot = (v: string) => {
    const next = state.timeSlots.includes(v) ? state.timeSlots.filter((s) => s !== v) : [...state.timeSlots, v];
    update({ timeSlots: next });
  };
  const toggleSize = (v: PetSize) => {
    const next = state.sizes.includes(v) ? state.sizes.filter((s) => s !== v) : [...state.sizes, v];
    update({ sizes: next });
  };
  const toggleAttr = (v: string) => {
    const next = state.attrs.includes(v) ? state.attrs.filter((s) => s !== v) : [...state.attrs, v];
    update({ attrs: next });
  };

  const activeCategory = SERVICE_CATEGORIES.find((c) => c.slug === state.category) || SERVICE_CATEGORIES[0];
  const activeFilterCount =
    state.subs.length + state.timeSlots.length + state.sizes.length + state.attrs.length;

  const FiltersPanel = (
    <div className="space-y-6">
      {/* Service category */}
      <div>
        <Label className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Service category</Label>
        <div className="mt-2 grid grid-cols-3 gap-1 rounded-full bg-secondary p-1">
          {SERVICE_CATEGORIES.map((c) => (
            <button
              key={c.slug}
              onClick={() => update({ category: c.slug, subs: [] })}
              className={cn(
                "px-2 py-1.5 text-xs font-semibold rounded-full transition-colors",
                state.category === c.slug ? "bg-card text-primary shadow-sm" : "text-muted-foreground",
              )}
            >
              {c.label.split(" ")[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Subcategories */}
      <div>
        <Label className="text-xs font-bold uppercase tracking-wide text-muted-foreground">{activeCategory.label}</Label>
        <div className="mt-2 flex flex-wrap gap-2">
          {activeCategory.subs.map((sub) => {
            const active = state.subs.includes(sub.slug);
            return (
              <button
                key={sub.slug}
                onClick={() => selectSub(sub.slug)}
                role="radio"
                aria-checked={active}
                className={cn(
                  "px-3 py-1.5 rounded-full text-xs font-medium border transition-colors",
                  active
                    ? "bg-accent text-accent-foreground border-accent"
                    : "bg-background text-foreground/80 border-border hover:bg-secondary",
                )}
              >
                {sub.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Dates */}
      <div>
        <Label className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Dates</Label>
        <Popover>
          <PopoverTrigger asChild>
            <button className="mt-2 w-full flex items-center gap-2 px-3 py-2.5 rounded-xl border border-input bg-background text-sm text-left hover:bg-secondary/40">
              <CalendarIcon className="h-4 w-4 text-primary" />
              {state.dates?.from
                ? state.dates.to
                  ? `${format(state.dates.from, "d MMM")} – ${format(state.dates.to, "d MMM")}`
                  : format(state.dates.from, "d MMM yyyy")
                : <span className="text-muted-foreground">Add dates</span>}
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 rounded-2xl" align="start">
            <Calendar
              mode="range"
              selected={state.dates}
              onSelect={(d) => update({ dates: d })}
              numberOfMonths={2}
              className={cn("p-3 pointer-events-auto")}
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Time slots — conditional */}
      {showTimeSlots && (
        <div className="animate-fade-in">
          <Label className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
            Preferred time of day
          </Label>
          <p className="mt-1 text-xs text-muted-foreground">
            Filter for walkers, groomers, drop-ins, or day care available during your preferred hours.
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {TIME_SLOTS.map((slot) => {
              const active = state.timeSlots.includes(slot.value);
              return (
                <button
                  key={slot.value}
                  onClick={() => toggleSlot(slot.value)}
                  className={cn(
                    "px-3 py-2 rounded-full text-xs font-medium border transition-colors",
                    active
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background text-foreground border-border hover:bg-secondary",
                  )}
                >
                  <span className="font-semibold">{slot.label}</span>
                  <span className={cn("ml-1.5", active ? "text-primary-foreground/80" : "text-muted-foreground")}>
                    {slot.hours}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Pet size */}
      <div>
        <Label className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Pet size</Label>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {PET_SIZES.map((s) => (
            <label
              key={s.value}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border hover:bg-secondary cursor-pointer text-xs"
            >
              <Checkbox checked={state.sizes.includes(s.value)} onCheckedChange={() => toggleSize(s.value)} />
              {s.label}
            </label>
          ))}
        </div>
      </div>

      {/* Sitter has */}
      <div>
        <Label className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Sitter has</Label>
        <div className="mt-2 space-y-2">
          {Object.entries(ATTR_LABELS).map(([key, label]) => (
            <label key={key} className="flex items-center gap-2 text-sm">
              <Checkbox checked={state.attrs.includes(key)} onCheckedChange={() => toggleAttr(key)} />
              {label}
            </label>
          ))}
        </div>
      </div>

      {activeFilterCount > 0 && (
        <Button
          variant="ghost"
          className="w-full rounded-full text-muted-foreground"
          onClick={() => update({ subs: [], timeSlots: [], sizes: [], attrs: [] })}
        >
          <X className="h-4 w-4 mr-1" /> Clear all filters
        </Button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Top search bar */}
      <div className="sticky top-16 md:top-20 z-40 bg-background/90 backdrop-blur border-b border-border">
        <div className="container-zoolio py-3 flex items-center gap-2">
          <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-2 items-center">
            <div className="md:col-span-5">
              <LocationCombobox
                variant="inline"
                value={state.location}
                onChange={(v) => update({ location: v })}
              />
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <button className="md:col-span-4 flex items-center gap-2 px-3 py-2.5 rounded-xl border border-input bg-background text-sm text-left hover:bg-secondary/40">
                  <CalendarIcon className="h-4 w-4 text-primary" />
                  {state.dates?.from
                    ? state.dates.to
                      ? `${format(state.dates.from, "d MMM")} – ${format(state.dates.to, "d MMM")}`
                      : format(state.dates.from, "d MMM yyyy")
                    : <span className="text-muted-foreground">Add dates</span>}
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 rounded-2xl" align="start">
                <Calendar mode="range" selected={state.dates} onSelect={(d) => update({ dates: d })} numberOfMonths={2} className={cn("p-3 pointer-events-auto")} />
              </PopoverContent>
            </Popover>
            <PetDetailsModal
              pets={state.pets}
              onChange={(pets) => update({ pets })}
              trigger={
                <button className="md:col-span-3 flex items-center gap-2 px-3 py-2.5 rounded-xl border border-input bg-background text-sm text-left hover:bg-secondary/40 w-full">
                  <span className="text-primary font-semibold">{state.pets.length || "Add"}</span>
                  <span className="text-muted-foreground">{state.pets.length === 1 ? "pet" : "pets"}</span>
                </button>
              }
            />
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="lg:hidden rounded-full shrink-0">
                <SlidersHorizontal className="h-4 w-4" />
                {activeFilterCount > 0 && (
                  <span className="ml-1 text-xs font-semibold text-accent">{activeFilterCount}</span>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[88vw] sm:w-96 overflow-y-auto">
              <SheetHeader><SheetTitle>Filters</SheetTitle></SheetHeader>
              <div className="mt-4">{FiltersPanel}</div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="container-zoolio py-6 flex-1 grid lg:grid-cols-12 gap-6">
        {/* Sidebar (desktop) */}
        <aside className="hidden lg:block lg:col-span-3 sticky top-40 self-start max-h-[calc(100vh-12rem)] overflow-y-auto pr-2">
          {FiltersPanel}
        </aside>

        {/* Results */}
        <section className="lg:col-span-9 min-w-0">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="font-display text-2xl font-bold text-foreground">
                {filtered.length} sitter{filtered.length === 1 ? "" : "s"}
                {state.location ? ` near ${state.location}` : " across South Africa"}
              </h1>
              <p className="text-xs text-muted-foreground mt-0.5">
                {state.subs.length
                  ? state.subs.map((s) => findSub(s)?.label).filter(Boolean).join(" · ")
                  : activeCategory.label}
              </p>
            </div>
            <div className="flex items-center gap-1 rounded-full bg-secondary p-1">
              <button
                onClick={() => setView("list")}
                className={cn(
                  "px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-colors",
                  view === "list" ? "bg-card text-primary shadow-sm" : "text-muted-foreground",
                )}
              >
                <List className="h-3.5 w-3.5" /> List
              </button>
              <button
                onClick={() => setView("map")}
                className={cn(
                  "px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-colors",
                  view === "map" ? "bg-card text-primary shadow-sm" : "text-muted-foreground",
                )}
              >
                <MapIcon className="h-3.5 w-3.5" /> Map
              </button>
            </div>
          </div>

          {view === "list" ? (
            <div className="grid gap-3">
              {filtered.length === 0 ? (
                <div className="text-center py-16 text-muted-foreground">
                  No sitters match your filters. Try widening your search.
                </div>
              ) : (
                filtered.map((s) => (
                  <SitterCard key={s.id} sitter={s} active={hoveredId === s.id} onHover={setHoveredId} />
                ))
              )}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-4 h-[70vh]">
              <div className="overflow-y-auto pr-1 space-y-3">
                {filtered.map((s) => (
                  <SitterCard key={s.id} sitter={s} active={hoveredId === s.id} onHover={setHoveredId} />
                ))}
              </div>
              <div className="h-full min-h-[400px] rounded-2xl overflow-hidden border border-border">
                <SitterMap sitters={filtered} activeId={hoveredId} onSelect={setHoveredId} />
              </div>
            </div>
          )}
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Search;
