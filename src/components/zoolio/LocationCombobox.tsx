import { useEffect, useMemo, useState } from "react";
import { Check, ChevronsUpDown, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { SA_LOCATIONS } from "@/data/locations";

interface LocationComboboxProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  variant?: "hero" | "inline";
}

export const LocationCombobox = ({
  value,
  onChange,
  placeholder = "Enter suburb, city or address in South Africa",
  variant = "hero",
}: LocationComboboxProps) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState(value);

  useEffect(() => setQuery(value), [value]);

  const grouped = useMemo(() => {
    const q = query.toLowerCase().trim();
    const matches = q
      ? SA_LOCATIONS.filter(
          (l) =>
            l.suburb.toLowerCase().includes(q) ||
            l.city.toLowerCase().includes(q) ||
            l.province.toLowerCase().includes(q),
        )
      : SA_LOCATIONS;
    const map = new Map<string, typeof SA_LOCATIONS>();
    matches.forEach((l) => {
      const arr = map.get(l.city) ?? [];
      arr.push(l);
      map.set(l.city, arr);
    });
    return Array.from(map.entries()).slice(0, 6);
  }, [query]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          className={cn(
            "flex w-full items-center gap-3 text-left transition-colors",
            variant === "hero"
              ? "px-4 py-3 rounded-2xl hover:bg-secondary/60"
              : "px-3 py-2.5 rounded-xl border border-input bg-background hover:bg-secondary/40",
          )}
        >
          <MapPin className="h-5 w-5 text-primary shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">Where</div>
            <div className={cn("text-sm font-medium truncate", !value && "text-muted-foreground/70 font-normal")}>
              {value || placeholder}
            </div>
          </div>
          <ChevronsUpDown className="h-4 w-4 text-muted-foreground/60 shrink-0" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-[min(92vw,420px)] p-0 rounded-2xl" align="start">
        <Command shouldFilter={false}>
          <CommandInput
            placeholder="Type a suburb, city or province…"
            value={query}
            onValueChange={setQuery}
          />
          <CommandList className="max-h-72">
            <CommandEmpty>No South African locations found.</CommandEmpty>
            {grouped.map(([city, items]) => (
              <CommandGroup key={city} heading={city}>
                {items.map((l) => {
                  const display = `${l.suburb}, ${l.city}`;
                  return (
                    <CommandItem
                      key={display}
                      value={display}
                      onSelect={() => {
                        onChange(display);
                        setOpen(false);
                      }}
                      className="flex items-center justify-between"
                    >
                      <div>
                        <div className="text-sm font-medium">{l.suburb}</div>
                        <div className="text-xs text-muted-foreground">{l.province}</div>
                      </div>
                      {value === display && <Check className="h-4 w-4 text-primary" />}
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
