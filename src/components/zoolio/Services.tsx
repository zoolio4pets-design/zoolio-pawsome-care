import { useState } from "react";
import { ArrowRight, Sun, Moon, Sparkles, LayoutGrid } from "lucide-react";
import { SERVICE_CATEGORIES, categoryForSub, type CategorySlug, type SubService } from "@/data/services";
import { useGoToSearch } from "@/lib/search-state";
import { cn } from "@/lib/utils";
import boarding from "@/assets/service-boarding.jpg";
import walking from "@/assets/service-walking.jpg";
import dropin from "@/assets/service-dropin.jpg";
import daycare from "@/assets/service-daycare.jpg";
import grooming from "@/assets/service-grooming.jpg";
import events from "@/assets/service-events.jpg";
import housesitting from "@/assets/service-housesitting.jpg";
import aquatic from "@/assets/service-aquatic.jpg";
import reptile from "@/assets/service-reptile.jpg";
import smallanimal from "@/assets/service-smallanimal.jpg";

const SUB_IMAGE: Record<string, string> = {
  "day-care": daycare,
  "digital-events": events,
  "dog-walking": walking,
  "drop-in-visits": dropin,
  "wellness-grooming": grooming,
  "boarding": boarding,
  "house-sitting": housesitting,
  "aquatic": aquatic,
  "reptile-exotic": reptile,
  "small-animal-bird": smallanimal,
};

type TabValue = CategorySlug | "all";

const TABS: { value: TabValue; label: string; icon: typeof Sun }[] = [
  { value: "daytime", label: "Daytime Care", icon: Sun },
  { value: "overnight", label: "Overnight Care", icon: Moon },
  { value: "other", label: "Other Services", icon: Sparkles },
  { value: "all", label: "All services", icon: LayoutGrid },
];

export const Services = () => {
  const goToSearch = useGoToSearch();
  const [active, setActive] = useState<TabValue>("daytime");

  const visibleSubs: { sub: SubService; categorySlug: CategorySlug }[] =
    active === "all"
      ? SERVICE_CATEGORIES.flatMap((c) => c.subs.map((sub) => ({ sub, categorySlug: c.slug })))
      : (SERVICE_CATEGORIES.find((c) => c.slug === active)?.subs ?? []).map((sub) => ({
          sub,
          categorySlug: active as CategorySlug,
        }));

  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container-zoolio">
        {/* Header */}
        <div className="max-w-3xl mb-10 md:mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Get to know services on Zoolio
          </h2>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            Get the care your pet needs, anytime and anywhere in South Africa.
          </p>
        </div>

        {/* Tabs */}
        <div
          role="tablist"
          aria-label="Service categories"
          className="flex flex-wrap gap-2 md:gap-3 mb-10 md:mb-14"
        >
          {TABS.map((t) => {
            const Icon = t.icon;
            const isActive = active === t.value;
            return (
              <button
                key={t.value}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(t.value)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm md:text-base font-semibold border transition-all",
                  isActive
                    ? "bg-foreground text-background border-foreground shadow-soft"
                    : "bg-background text-foreground border-border hover:border-foreground/40 hover:bg-muted"
                )}
              >
                <Icon className="h-4 w-4" />
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Cards (stacked) */}
        <div className="space-y-6 md:space-y-8">
          {visibleSubs.map(({ sub, categorySlug }) => (
            <article
              key={sub.slug}
              className="group bg-card rounded-3xl border border-border/60 overflow-hidden shadow-soft hover:shadow-card transition-all"
            >
              <div className="grid md:grid-cols-12 gap-0">
                <div className="md:col-span-5 lg:col-span-5 relative overflow-hidden">
                  <div className="aspect-[4/3] md:aspect-auto md:h-full">
                    <img
                      src={SUB_IMAGE[sub.slug]}
                      alt={`${sub.label} on Zoolio`}
                      loading="lazy"
                      width={1280}
                      height={896}
                      className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>

                <div className="md:col-span-7 lg:col-span-7 p-6 md:p-10 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                      {sub.label}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-primary">
                      {sub.shortDesc}
                    </p>
                    <p className="mt-5 text-base md:text-lg text-foreground/80 leading-relaxed">
                      {sub.blurb}
                    </p>
                  </div>

                  <div className="mt-8 flex justify-end">
                    <button
                      onClick={() => {
                        const c = categoryForSub(sub.slug) ?? { slug: categorySlug };
                        goToSearch({ category: c.slug as CategorySlug, subs: [sub.slug] });
                      }}
                      className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-semibold hover:bg-foreground/90 transition-all hover:gap-3"
                    >
                      Explore {sub.label}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
