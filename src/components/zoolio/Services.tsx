import { ArrowRight } from "lucide-react";
import { SERVICE_CATEGORIES, categoryForSub } from "@/data/services";
import { useGoToSearch } from "@/lib/search-state";
import boarding from "@/assets/service-boarding.jpg";
import walking from "@/assets/service-walking.jpg";
import dropin from "@/assets/service-dropin.jpg";
import daycare from "@/assets/service-daycare.jpg";

const CATEGORY_IMAGE: Record<string, string> = {
  daytime: walking,
  overnight: boarding,
  other: dropin,
};

const SUB_IMAGE: Record<string, string> = {
  "day-care": daycare,
  "drop-in-visits": dropin,
  "dog-walking": walking,
  "wellness-grooming": dropin,
  "digital-events": daycare,
  "boarding": boarding,
  "house-sitting": dropin,
  "aquatic": dropin,
  "reptile-exotic": dropin,
  "small-animal-bird": daycare,
};

export const Services = () => {
  const goToSearch = useGoToSearch();

  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container-zoolio space-y-16 md:space-y-24">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">Services</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-foreground">
            Care for every kind of pet, every day and night
          </h2>
        </div>

        {SERVICE_CATEGORIES.map((cat) => (
          <div key={cat.slug} className="space-y-8">
            <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-end">
              <div className="md:col-span-5">
                <div className="overflow-hidden rounded-3xl aspect-[4/3] shadow-card">
                  <img
                    src={CATEGORY_IMAGE[cat.slug]}
                    alt={`${cat.label} on Zoolio`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-7">
                <div className="text-xs font-bold uppercase tracking-widest text-primary">{cat.label}</div>
                <h3 className="mt-2 text-2xl md:text-3xl font-bold text-foreground">
                  {cat.label}
                </h3>
                <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                  {cat.intro}
                </p>
                <button
                  onClick={() => goToSearch({ category: cat.slug, subs: cat.subs.map((s) => s.slug) })}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                >
                  Explore {cat.label} <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {cat.subs.map((sub) => (
                <button
                  key={sub.slug}
                  onClick={() => {
                    const c = categoryForSub(sub.slug);
                    if (c) goToSearch({ category: c.slug, subs: [sub.slug] });
                  }}
                  className="group text-left bg-card rounded-2xl border border-border/60 p-4 hover:shadow-card hover:border-primary/30 transition-all"
                >
                  <div className="aspect-[5/3] rounded-xl overflow-hidden mb-3">
                    <img
                      src={SUB_IMAGE[sub.slug]}
                      alt={sub.label}
                      loading="lazy"
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="font-display text-lg font-semibold text-foreground">{sub.label}</h4>
                  <p className="mt-1 text-xs text-muted-foreground">{sub.shortDesc}</p>
                  <p className="mt-2 text-sm text-foreground/80">{sub.blurb}</p>
                  <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Find a sitter <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
