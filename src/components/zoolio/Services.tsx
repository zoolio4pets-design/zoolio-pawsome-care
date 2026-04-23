import { useState } from "react";
import { Sun, Moon, Star } from "lucide-react";
import { useGoToSearch } from "@/lib/search-state";
import {
  SERVICE_CATEGORIES,
  type CategorySlug,
  type SubServiceSlug,
} from "@/data/services";
import { cn } from "@/lib/utils";

import dayCareImg from "@/assets/services/day-care.jpg";
import dogWalkingImg from "@/assets/services/dog-walking.jpg";
import dropInImg from "@/assets/services/drop-in.jpg";
import digitalEventsImg from "@/assets/services/digital-events.jpg";
import groomingImg from "@/assets/services/grooming.jpg";
import boardingImg from "@/assets/services/boarding.jpg";
import houseSittingImg from "@/assets/services/house-sitting.jpg";
import aquaticImg from "@/assets/services/aquatic.jpg";
import reptileImg from "@/assets/services/reptile.jpg";
import smallAnimalImg from "@/assets/services/small-animal.jpg";

const SUB_IMAGES: Record<SubServiceSlug, string> = {
  "day-care": dayCareImg,
  "dog-walking": dogWalkingImg,
  "drop-in-visits": dropInImg,
  "digital-events": digitalEventsImg,
  "wellness-grooming": groomingImg,
  boarding: boardingImg,
  "house-sitting": houseSittingImg,
  aquatic: aquaticImg,
  "reptile-exotic": reptileImg,
  "small-animal-bird": smallAnimalImg,
};

// Card-specific copy (concise, per spec)
const CARD_DESC: Partial<Record<SubServiceSlug, string>> = {
  "day-care":
    "Give your dog playtime in a fun, safe environment while you're away. Choose between a trusted sitter's home or a local day care centre.",
  "dog-walking":
    "Unleash the excitement with action-packed neighbourhood adventures! Give your energetic pup the ultimate workout—full of fresh air, joyful sniffs, and boundless exploration.",
  "drop-in-visits":
    "Perfect for cats and independent pups who just need a sitter to drop by. Your pets get potty breaks, clean litter boxes, playtime, and meals.",
  "digital-events":
    "From glamorous paw-ty planning to perfect photography, treat your fur-babies like the true celebs.",
  "wellness-grooming":
    "From grooming and nail trims to wellness and fitness care—all the pampering, minus the vet visit.",
  boarding:
    "A thrilling sleepover adventure! Your pet gets VIP treatment in a trusted sitter's cozy home—packed with snuggles and personalized fun.",
  "house-sitting":
    "Travel stress-free. Book a trusted sitter to stay in your home and keep your pets in their usual routine.",
  aquatic:
    "Crystal-clear tanks and happy fins. Expert care for aquariums, ponds, and aquatic pets.",
  "reptile-exotic":
    "Specialized care for reptiles, amphibians, and exotic pets that need a little extra know-how.",
  "small-animal-bird":
    "Gentle, knowledgeable care for birds and small pets like rabbits, guinea pigs, and hamsters.",
};

const CATEGORY_LABEL: Record<CategorySlug, string> = {
  daytime: "Daytime Care",
  overnight: "Overnight Care",
  other: "Specialized Care",
};

const CATEGORY_ICON: Record<CategorySlug, typeof Sun> = {
  daytime: Sun,
  overnight: Moon,
  other: Star,
};

const CATEGORY_ORDER: CategorySlug[] = ["daytime", "overnight", "other"];

export const Services = () => {
  const goToSearch = useGoToSearch();
  const [activeCat, setActiveCat] = useState<CategorySlug>("daytime");

  const category = SERVICE_CATEGORIES.find((c) => c.slug === activeCat)!;

  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container-zoolio">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Services for Every Pet
          </h2>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            Book trusted pet care across South Africa—for paws, scales, and tails.
          </p>
        </div>

        {/* Chips */}
        <div
          role="tablist"
          aria-label="Service categories"
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 md:mb-14"
        >
          {CATEGORY_ORDER.map((slug) => {
            const Icon = CATEGORY_ICON[slug];
            const isActive = activeCat === slug;
            return (
              <button
                key={slug}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCat(slug)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm md:text-base font-semibold transition-all duration-300 border",
                  isActive
                    ? "bg-primary text-primary-foreground border-primary shadow-cta scale-[1.02]"
                    : "bg-background text-foreground/80 border-border hover:border-primary/50 hover:text-primary",
                )}
              >
                <Icon className="h-4 w-4" />
                {CATEGORY_LABEL[slug]}
              </button>
            );
          })}
        </div>

        {/* Description */}
        <div
          key={`desc-${activeCat}`}
          className="max-w-3xl mx-auto text-center mb-10 md:mb-14 animate-fade-in"
        >
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            {category.intro}
          </p>
        </div>

        {/* Cards */}
        <div
          key={`grid-${activeCat}`}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 animate-fade-up"
        >
          {category.subs.map((sub) => (
            <button
              key={sub.slug}
              type="button"
              onClick={() =>
                goToSearch({ category: activeCat, subs: [sub.slug] })
              }
              className="group text-left bg-card rounded-2xl border border-border/60 overflow-hidden hover:border-primary/40 hover:shadow-card transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={SUB_IMAGES[sub.slug]}
                  alt={sub.label}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 md:p-6">
                <h4 className="text-lg font-bold text-foreground">{sub.label}</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {CARD_DESC[sub.slug] ?? sub.blurb}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
