import { useState } from "react";
import { format } from "date-fns";
import {
  CalendarIcon,
  PawPrint,
  Search,
  ChevronDown,
  Dog,
  Cat,
  Fish,
  Bird,
  Rabbit,
  Bug,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import type { DateRange } from "react-day-picker";
import heroImage from "@/assets/hero-pets.jpg";
import heroVideo from "@/assets/hero-pets.mp4.asset.json";
import { useGoToSearch } from "@/lib/search-state";
import type { CategorySlug, SubServiceSlug } from "@/data/services";
import { categoryForSub, SERVICE_CATEGORIES } from "@/data/services";

const PET_OPTIONS = [
  { value: "large-dog", label: "Large Dog", icon: Dog },
  { value: "small-dog", label: "Small Dog", icon: Dog },
  { value: "cat", label: "Cat", icon: Cat },
  { value: "small-animal", label: "Small Animal", icon: Rabbit },
  { value: "reptile", label: "Reptile", icon: Bug },
  { value: "fish", label: "Fish", icon: Fish },
] as const;

const HOURS = Array.from({ length: 15 }, (_, i) => {
  const h = i + 7; // 07:00 – 21:00
  return { value: `${String(h).padStart(2, "0")}:00`, label: `${((h + 11) % 12) + 1}:00 ${h < 12 ? "AM" : "PM"}` };
});

export const HeroSearch = () => {
  const [sub, setSub] = useState<SubServiceSlug>("dog-walking");
  const [petType, setPetType] = useState<string>("large-dog");
  const [location, setLocation] = useState("");
  const [dates, setDates] = useState<DateRange | undefined>();
  const [startTime, setStartTime] = useState<string | undefined>();
  const [endTime, setEndTime] = useState<string | undefined>();
  const goToSearch = useGoToSearch();

  const handleSearch = () => {
    const c = categoryForSub(sub);
    goToSearch({
      category: (c?.slug ?? "daytime") as CategorySlug,
      subs: [sub],
      location,
      dates,
    });
  };

  return (
    <section className="relative isolate overflow-hidden">
      {/* Background video (kept as-is) */}
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
            Loving Pet Care for every{" "}
            <span className="italic text-accent">Neighbourhood.</span>
          </h1>
          <p className="mt-5 text-lg md:text-xl text-background/90 max-w-xl drop-shadow">
            Book trusted pet care across South Africa—for paws, scales, and tails.
          </p>
        </div>

        {/* Search card */}
        <div className="mt-10 md:mt-14 max-w-6xl">
          <div className="bg-card rounded-3xl shadow-search border border-border/60 p-4 md:p-6 animate-fade-up">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3">
              {/* I'm looking for */}
              <div className="lg:col-span-3">
                <label className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
                  I'm looking for
                </label>
                <Select value={sub} onValueChange={(v) => setSub(v as SubServiceSlug)}>
                  <SelectTrigger className="mt-1 h-12 rounded-xl border-border bg-background">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[420px]">
                    {SERVICE_CATEGORIES.map((cat) => (
                      <SelectGroup key={cat.slug}>
                        <SelectLabel className="text-[11px] font-bold uppercase tracking-wider text-primary">
                          {cat.slug === "other" ? "Specialized Care" : cat.label}
                        </SelectLabel>
                        {cat.subs.map((s) => (
                          <SelectItem key={s.slug} value={s.slug} className="pl-6">
                            {s.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* For my */}
              <div className="lg:col-span-2">
                <label className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
                  For my
                </label>
                <Select value={petType} onValueChange={setPetType}>
                  <SelectTrigger className="mt-1 h-12 rounded-xl border-border bg-background">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {PET_OPTIONS.map((p) => {
                      const Icon = p.icon;
                      return (
                        <SelectItem key={p.value} value={p.value}>
                          <span className="inline-flex items-center gap-2">
                            <Icon className="h-4 w-4 text-primary" />
                            {p.label}
                          </span>
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>

              {/* Where */}
              <div className="lg:col-span-3">
                <label className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
                  Where
                </label>
                <Input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="City or suburb"
                  className="mt-1 h-12 rounded-xl border-border bg-background"
                />
              </div>

              {/* Dates */}
              <div className="lg:col-span-2">
                <label className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
                  Dates
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      className={cn(
                        "mt-1 h-12 w-full inline-flex items-center gap-2 px-3 rounded-xl border border-border bg-background text-sm font-medium hover:bg-secondary/60 transition-colors",
                        !dates?.from && "text-muted-foreground",
                      )}
                    >
                      <CalendarIcon className="h-4 w-4 text-primary shrink-0" />
                      <span className="truncate">
                        {dates?.from
                          ? dates.to
                            ? `${format(dates.from, "d MMM")} – ${format(dates.to, "d MMM")}`
                            : format(dates.from, "d MMM yyyy")
                          : "Add dates"}
                      </span>
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
              </div>

              {/* Time */}
              <div className="lg:col-span-2">
                <label className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
                  Time
                </label>
                <div className="mt-1 grid grid-cols-2 gap-1.5">
                  <Select value={startTime} onValueChange={setStartTime}>
                    <SelectTrigger className="h-12 rounded-xl border-border bg-background px-2 text-xs">
                      <SelectValue placeholder="Start" />
                    </SelectTrigger>
                    <SelectContent>
                      {HOURS.map((h) => (
                        <SelectItem key={h.value} value={h.value}>
                          {h.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select value={endTime} onValueChange={setEndTime}>
                    <SelectTrigger className="h-12 rounded-xl border-border bg-background px-2 text-xs">
                      <SelectValue placeholder="End" />
                    </SelectTrigger>
                    <SelectContent>
                      {HOURS.map((h) => (
                        <SelectItem key={h.value} value={h.value}>
                          {h.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <Button
                size="lg"
                onClick={handleSearch}
                className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-cta px-8 h-12 font-semibold w-full sm:w-auto"
              >
                <Search className="h-5 w-5 mr-2" /> Search Providers
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
