import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, MapPin, PawPrint, Search, SlidersHorizontal, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import type { DateRange } from "react-day-picker";
import heroImage from "@/assets/hero-pets.jpg";

const services = [
  { value: "boarding", label: "Boarding" },
  { value: "house-sitting", label: "House Sitting" },
  { value: "drop-in", label: "Drop-In Visits" },
  { value: "walking", label: "Dog Walking" },
  { value: "daycare", label: "Doggy Day Care" },
  { value: "training", label: "Training" },
];

const petSizes = ["Small (0–7kg)", "Medium (7–18kg)", "Large (18–40kg)", "Giant (40kg+)"];
const filters = [
  "Fenced yard", "Non-smoking home", "Has no children", "Has no other pets",
  "Accepts puppies", "Accepts senior dogs", "Gives medication", "Grooming included",
];

export const HeroSearch = () => {
  const [service, setService] = useState("boarding");
  const [location, setLocation] = useState("");
  const [dates, setDates] = useState<DateRange | undefined>();
  const [petType, setPetType] = useState("dog");

  return (
    <section className="relative isolate overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImage}
          alt="Two happy dogs playing together in a sunny South African garden"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
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
            {/* Service tabs */}
            <div className="flex gap-1 overflow-x-auto pb-2 mb-2 border-b border-border scrollbar-none">
              {services.map((s) => (
                <button
                  key={s.value}
                  onClick={() => setService(s.value)}
                  className={cn(
                    "whitespace-nowrap px-4 py-2 text-sm font-semibold rounded-full transition-all",
                    service === s.value
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  )}
                >
                  {s.label}
                </button>
              ))}
            </div>

            {/* Search row */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
              {/* Location */}
              <div className="md:col-span-5 flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-secondary/60 transition-colors">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <div className="flex-1 min-w-0">
                  <Label className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">Where</Label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Suburb, city or address"
                    className="w-full bg-transparent text-sm font-medium placeholder:text-muted-foreground/70 focus:outline-none"
                  />
                </div>
              </div>

              {/* Dates */}
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

              {/* Pet */}
              <div className="md:col-span-3 flex items-center gap-2">
                <Select value={petType} onValueChange={setPetType}>
                  <SelectTrigger className="border-0 bg-transparent hover:bg-secondary/60 rounded-2xl h-auto py-3 px-4 [&>svg]:opacity-60">
                    <div className="flex items-center gap-3 w-full">
                      <PawPrint className="h-5 w-5 text-primary shrink-0" />
                      <div className="flex-1 text-left min-w-0">
                        <div className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">Pet</div>
                        <SelectValue className="text-sm font-medium" />
                      </div>
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dog">Dog</SelectItem>
                    <SelectItem value="cat">Cat</SelectItem>
                    <SelectItem value="both">Dog & Cat</SelectItem>
                    <SelectItem value="other">Other pet</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Action row */}
            <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-2 mt-2 pt-2 border-t border-border">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" className="rounded-full text-sm font-semibold text-foreground/80 self-start">
                    <SlidersHorizontal className="h-4 w-4 mr-2" /> Advanced filters <ChevronDown className="h-4 w-4 ml-1" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[min(92vw,420px)] rounded-2xl p-5" align="start">
                  <div className="space-y-4">
                    <div>
                      <Label className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Pet size</Label>
                      <div className="mt-2 grid grid-cols-2 gap-2">
                        {petSizes.map((s) => (
                          <label key={s} className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border hover:bg-secondary cursor-pointer text-sm">
                            <Checkbox /> {s}
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <Label className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Sitter has</Label>
                      <div className="mt-2 space-y-2">
                        {filters.map((f) => (
                          <label key={f} className="flex items-center gap-2 text-sm">
                            <Checkbox /> {f}
                          </label>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full rounded-full bg-primary">Apply filters</Button>
                  </div>
                </PopoverContent>
              </Popover>

              <Button
                size="lg"
                className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-cta px-8 h-12 font-semibold"
              >
                <Search className="h-5 w-5 mr-2" /> Search sitters
              </Button>
            </div>
          </div>

          <p className="mt-4 text-sm text-background/90 drop-shadow">
            Popular: Cape Town · Sandton · Durban North · Stellenbosch · Pretoria East
          </p>
        </div>
      </div>
    </section>
  );
};
