import {
  Sparkles,
  Footprints,
  Home,
  Scissors,
  Camera,
  Bed,
  KeyRound,
  Fish,
  PawPrint,
  Bird,
  Sun,
  Moon,
  Star,
  type LucideIcon,
} from "lucide-react";
import { useGoToSearch } from "@/lib/search-state";
import { categoryForSub, type CategorySlug, type SubServiceSlug } from "@/data/services";

type ServiceItem = {
  slug: SubServiceSlug;
  label: string;
  desc: string;
  icon: LucideIcon;
};

type Group = {
  title: string;
  icon: LucideIcon;
  items: ServiceItem[];
};

const GROUPS: Group[] = [
  {
    title: "Daytime Care",
    icon: Sun,
    items: [
      { slug: "day-care", label: "Day Care", desc: "Playtime in a sitter's home or facility.", icon: Sparkles },
      { slug: "dog-walking", label: "Dog Walking", desc: "Neighbourhood walks full of fresh air.", icon: Footprints },
      { slug: "drop-in-visits", label: "Drop-In Visits", desc: "Quick visits for meals and potty breaks.", icon: Home },
      { slug: "wellness-grooming", label: "Health, Wellness & Grooming", desc: "Pampering, nail trims and wellness care.", icon: Scissors },
      { slug: "digital-events", label: "Digital & Event Services", desc: "Paw-ties and pet photoshoots.", icon: Camera },
    ],
  },
  {
    title: "Overnight Care",
    icon: Moon,
    items: [
      { slug: "boarding", label: "Boarding", desc: "Cozy overnight stays in a sitter's home.", icon: Bed },
      { slug: "house-sitting", label: "Pet & House Sitting", desc: "A trusted sitter stays in your home.", icon: KeyRound },
    ],
  },
  {
    title: "Specialized Care",
    icon: Star,
    items: [
      { slug: "aquatic", label: "Aquarium & Aquatic Services", desc: "Expert care for fish and aquariums.", icon: Fish },
      { slug: "reptile-exotic", label: "Reptile & Exotic Pet Care", desc: "Specialised care for reptiles and exotics.", icon: PawPrint },
      { slug: "small-animal-bird", label: "Small Animal & Bird Care", desc: "Gentle care for birds and small pets.", icon: Bird },
    ],
  },
];

export const Services = () => {
  const goToSearch = useGoToSearch();

  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container-zoolio">
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Services for Every Pet
          </h2>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            From wagging tails to scaly friends — find the perfect care across South Africa.
          </p>
        </div>

        <div className="space-y-14 md:space-y-20">
          {GROUPS.map((group) => {
            const GroupIcon = group.icon;
            return (
              <div key={group.title}>
                <div className="flex items-center gap-3 mb-6 md:mb-8">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-primary">
                    <GroupIcon className="h-5 w-5" />
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{group.title}</h3>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {group.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.slug}
                        type="button"
                        onClick={() => {
                          const c = categoryForSub(item.slug);
                          goToSearch({ category: (c?.slug ?? "daytime") as CategorySlug, subs: [item.slug] });
                        }}
                        className="group text-left bg-card rounded-2xl border border-border/60 p-6 hover:border-primary/40 hover:shadow-card transition-all"
                      >
                        <span className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <Icon className="h-6 w-6" />
                        </span>
                        <h4 className="mt-5 text-lg font-bold text-foreground">{item.label}</h4>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
