import { Star, MapPin, Shield } from "lucide-react";
import type { Sitter } from "@/data/sitters";
import { findSub } from "@/data/services";
import { cn } from "@/lib/utils";

interface SitterCardProps {
  sitter: Sitter;
  active?: boolean;
  onHover?: (id: string | null) => void;
  durationLabel?: string;
  subLabel?: string;
}

export const SitterCard = ({ sitter, active, onHover, durationLabel, subLabel }: SitterCardProps) => {
  const services = sitter.services.map((s) => findSub(s)?.label).filter(Boolean) as string[];
  const durationBadge = durationLabel
    ? `${durationLabel}${subLabel ? ` ${subLabel.toLowerCase()}` : ""}`
    : "";
  return (
    <article
      onMouseEnter={() => onHover?.(sitter.id)}
      onMouseLeave={() => onHover?.(null)}
      className={cn(
        "group flex gap-4 p-4 rounded-2xl border bg-card transition-all cursor-pointer",
        active ? "border-primary shadow-card" : "border-border/60 hover:border-primary/30 hover:shadow-soft",
      )}
    >
      <div className="h-24 w-24 sm:h-28 sm:w-28 rounded-xl overflow-hidden shrink-0 bg-secondary">
        <img src={sitter.photo} alt={sitter.name} loading="lazy" className="h-full w-full object-cover" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="font-display text-lg font-semibold text-foreground truncate">{sitter.name}</h3>
            <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
              <MapPin className="h-3 w-3" /> {sitter.suburb}, {sitter.city}
            </div>
          </div>
          <div className="text-right shrink-0">
            <div className="text-lg font-bold text-foreground">R{sitter.pricePerNightZar}</div>
            <div className="text-[10px] uppercase tracking-wide text-muted-foreground">per night</div>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-2 text-xs">
          <div className="flex items-center gap-1 text-foreground font-semibold">
            <Star className="h-3.5 w-3.5 fill-accent text-accent" /> {sitter.rating}
            <span className="text-muted-foreground font-normal">({sitter.reviews})</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Shield className="h-3 w-3 text-primary" /> Verified · {sitter.yearsExperience}y exp
          </div>
        </div>

        <p className="mt-2 text-xs text-muted-foreground line-clamp-2">{sitter.bio}</p>

        <div className="mt-2 flex flex-wrap gap-1">
          {durationBadge && (
            <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-semibold">
              {durationBadge}
            </span>
          )}
          {services.slice(0, 3).map((s) => (
            <span key={s} className="px-2 py-0.5 rounded-full bg-secondary text-[10px] font-medium text-foreground/80">
              {s}
            </span>
          ))}
          {services.length > 3 && (
            <span className="text-[10px] text-muted-foreground self-center">+{services.length - 3} more</span>
          )}
        </div>
      </div>
    </article>
  );
};
