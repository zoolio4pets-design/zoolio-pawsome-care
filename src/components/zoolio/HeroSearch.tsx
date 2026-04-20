import { useEffect, useMemo, useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, ChevronDown, PawPrint, Search, SlidersHorizontal, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import type { DateRange } from "react-day-picker";
import heroImage from "@/assets/hero-pets.jpg";
import heroVideo from "@/assets/hero-pets.mp4.asset.json";
import {
  SERVICE_CATEGORIES,
  TIME_SLOTS,
  TIME_SLOT_SERVICES,
  type CategorySlug,
  type SubServiceSlug,
} from "@/data/services";
import { POPULAR_LOCATIONS } from "@/data/locations";
import { LocationCombobox } from "./LocationCombobox";
import { PetDetailsModal, type Pet } from "./PetDetailsModal";
import { useGoToSearch } from "@/lib/search-state";

export const HeroSearch = () => {
  const [category, setCategory] = useState<CategorySlug>("daytime");
  const [subs, setSubs] = useState<SubServiceSlug[]>(["dog-walking"]);
  const [location, setLocation] = useState("");
  const [dates, setDates] = useState<DateRange | undefined>();
  const [pets, setPets] = useState<Pet[]>([]);
  const [timeSlots, setTimeSlots] = useState<string[]>([]);
  const goToSearch = useGoToSearch();

  const activeCategory = useMemo(
    () => SERVICE_CATEGORIES.find((c) => c.slug === category)!,
    [category],
  );

  const showTimeSlots = useMemo(
    () => subs.some((s) => TIME_SLOT_SERVICES.has(s)),
    [subs],
  );

  // When category changes, ensure selected subs all belong to it.
  useEffect(() => {
    setSubs((prev) => {
      const valid = prev.filter((s) => activeCategory.subs.some((sub) => sub.slug === s));
      return valid.length ? valid : [activeCategory.subs[0].slug];
    });
  }, [activeCategory]);

  const toggleSub = (slug: SubServiceSlug) =>
    setSubs((prev) => (prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]));

  const toggleSlot = (v: string) =>
    setTimeSlots((prev) => (prev.includes(v) ? prev.filter((s) => s !== v) : [...prev, v]));

  const handleSearch = () => {
    goToSearch({ category, subs, location, dates, pets, timeSlots });
  };

  return (
    <section className="relative isolate overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 -z-10">
        <video
          src={heroVideo.url}
          poster={heroImage}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          aria-label="Two happy dogs playing together in a sunny South African garden"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/30 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/40 to-transparent" />
      </div>

      <div className="container-zoolio pt-16 pb-24 md:pt-28 md:pb-40">
        <div className="max-w-3xl animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-background/80 backdrop-blur px-4 py-1.5 text-xs font-semibold text-primary border border-border">
            <PawPrint className="h-3.5 w-3.5" /> Trusted by 50,000+ South African pet parents
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-background leading-[1.05] drop-shadow-md">
            Trusted pet care in your{" "}
            <span className="italic text-accent">neighbourhood</span>
          </h1>
          <p className="mt-5 text-lg md:text-xl text-background/90 max-w-xl drop-shadow">
            Book loving sitters and walkers across South Africa. Verified, insured, and reviewed by your community.
          </p>
        </div>

        {/* Search card */}
        <div className="mt-10 md:mt-14 max-w-5xl">
          <div className="bg-card rounded-3xl shadow-search border border-border/60 p-3 md:p-4 animate-fade-up">
            {/* Main category tabs */}
            <div className="flex gap-1 overflow-x-auto pb-2 mb-2 border-b border-border scrollbar-none">
              {SERVICE_CATEGORIES.map((c) => (
                <button
                  key={c.slug}
                  onClick={() => setCategory(c.slug)}
                  className={cn(
                    "whitespace-nowrap px-4 py-2 text-sm font-semibold rounded-full transition-all",
                    category === c.slug
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary",
                  )}
                >
                  {c.label}
                </button>
              ))}
            </div>

            {/* Subcategory chips */}
            <div className="flex flex-wrap gap-2 px-1 pb-3 border-b border-border">
              {activeCategory.subs.map((sub) => {
                const active = subs.includes(sub.slug);
                return (
                  <button
                    key={sub.slug}
                    type="button"
                    onClick={() => toggleSub(sub.slug)}
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

            {/* Search row */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mt-2">
              <div className="md:col-span-5">
                <LocationCombobox value={location} onChange={setLocation} />
              </div>

              <Popover>
                <PopoverTrigger asChild>
                  <button className="md:col-span-4 flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-secondary/60 transition-colors text-left">
                    <CalendarIcon className="h-5 w-5 text-primary shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">When</div>
                      <div className="text-sm font-medium truncate">
                        {dates?.from
                          ? dates.to
                            ? `${format(dates.from, "d MMM")} – ${format(dates.to, "d MMM")}`
                            : format(dates.from, "d MMM yyyy")
                          : <span className="text-muted-foreground/70">Add dates</span>}
                      </div>
                    </div>
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 rounded-2xl" align="start">
                  <Calendar
                    mode="range"
                    selected={dates}
                    onSelect={setDates}
                    numberOfMonths={2}
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>

              <PetDetailsModal
                pets={pets}
                onChange={setPets}
                trigger={
                  <button className="md:col-span-3 flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-secondary/60 transition-colors text-left w-full">
                    <Users className="h-5 w-5 text-primary shrink-0" />
                    <div className="flex-1 text-left min-w-0">
                      <div className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">Pets</div>
                      <div className="text-sm font-medium truncate">
                        {pets.length
                          ? `${pets.length} pet${pets.length > 1 ? "s" : ""} added`
                          : <span className="text-muted-foreground/70">Add pets</span>}
                      </div>
                    </div>
                  </button>
                }
              />
            </div>

            {/* Conditional time slot row */}
            {showTimeSlots && (
              <div className="mt-3 px-2 animate-fade-in">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <Label className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
                    Preferred time of day
                  </Label>
                  <span className="text-[11px] text-muted-foreground/80 hidden sm:inline">
                    Filter for walkers, groomers, drop-ins, or day care during your preferred hours
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {TIME_SLOTS.map((slot) => {
                    const active = timeSlots.includes(slot.value);
                    return (
                      <button
                        key={slot.value}
                        type="button"
                        onClick={() => toggleSlot(slot.value)}
                        className={cn(
                          "px-3 py-1.5 rounded-full text-xs font-medium border transition-colors",
                          active
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-background text-foreground border-border hover:bg-secondary",
                        )}
                      >
                        <span className="font-semibold">{slot.label}</span>
                        <span className={cn("ml-2", active ? "text-primary-foreground/80" : "text-muted-foreground")}>
                          {slot.hours}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Action row */}
            <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-2 mt-3 pt-3 border-t border-border">
              <button
                type="button"
                onClick={handleSearch}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-foreground/70 hover:text-foreground self-start"
              >
                <SlidersHorizontal className="h-4 w-4" /> More filters
                <ChevronDown className="h-4 w-4" />
              </button>

              <Button
                size="lg"
                onClick={handleSearch}
                className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-cta px-8 h-12 font-semibold"
              >
                <Search className="h-5 w-5 mr-2" /> Search
              </Button>
            </div>
          </div>

          <div className="mt-4 text-sm text-background/90 drop-shadow flex flex-wrap gap-x-2 gap-y-1 items-center">
            <span>Popular:</span>
            {POPULAR_LOCATIONS.map((city, i) => (
              <span key={city} className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setLocation(city)}
                  className="underline-offset-4 hover:underline hover:text-background transition-colors"
                >
                  {city}
                </button>
                {i < POPULAR_LOCATIONS.length - 1 && <span aria-hidden>·</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
