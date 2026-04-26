import { useParams, Link, Navigate } from "react-router-dom";
import { PageShell } from "@/components/zoolio/PageShell";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check } from "lucide-react";
import {
  SERVICE_CATEGORIES,
  findSub,
  categoryForSub,
  type SubServiceSlug,
} from "@/data/services";
import { useGoToSearch } from "@/lib/search-state";

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

const FUN_DESC: Record<SubServiceSlug, string> = {
  "day-care": "The Ultimate Playdate! Why stay home when you can be making new best friends?",
  "dog-walking": "The Sniff-ari! Turning your neighbourhood stroll into an epic adventure.",
  "drop-in-visits": "The Quick Cuddle. Perfect for a snack, a potty break, and a whole lot of love.",
  "digital-events": "Pup-arazzi & Paw-ties! Because your pet belongs on the red carpet.",
  "wellness-grooming": "The Spa Day. All the pampering, zero vet-visit jitters.",
  boarding: "The Ultimate Sleepover! A vacation for your pet while you're on your own vacation.",
  "house-sitting": "The Stay-cation. Trusted heroes staying over so your pet never misses a beat in their own home.",
  aquatic: "VIP (Very Important Pets)! Fins, feathers, or scales — we speak their language too.",
  "reptile-exotic": "VIP (Very Important Pets)! Fins, feathers, or scales — we speak their language too.",
  "small-animal-bird": "VIP (Very Important Pets)! Fins, feathers, or scales — we speak their language too.",
};

const HIGHLIGHTS = [
  "Hand-verified, community-vetted local pet heroes",
  "Safe, secure platform payments",
  "100% free to browse for pet parents",
  "Flexible refunds — every cloud has a silver lining",
];

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const goToSearch = useGoToSearch();

  const sub = slug ? findSub(slug) : undefined;
  if (!sub) return <Navigate to="/" replace />;

  const cat = categoryForSub(sub.slug)!;
  const img = SUB_IMAGES[sub.slug];
  const related = SERVICE_CATEGORIES.flatMap((c) => c.subs).filter((s) => s.slug !== sub.slug).slice(0, 3);

  return (
    <PageShell title={sub.label} description={FUN_DESC[sub.slug]}>
      <section className="container-zoolio pt-10 md:pt-16 pb-6">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>
      </section>

      <section className="container-zoolio pb-16 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              {cat.slug === "other" ? "Specialized Care" : cat.label}
            </span>
            <h1 className="mt-3 text-4xl md:text-6xl font-bold text-foreground tracking-tight">
              {sub.label}
            </h1>
            <p className="mt-5 text-lg md:text-xl text-muted-foreground leading-relaxed">
              {FUN_DESC[sub.slug]}
            </p>
            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              {sub.blurb}
            </p>

            <ul className="mt-8 space-y-3">
              {HIGHLIGHTS.map((h) => (
                <li key={h} className="flex items-start gap-3 text-foreground/85">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-primary/10 text-primary mt-0.5 shrink-0">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button
                size="lg"
                onClick={() => goToSearch({ category: cat.slug, subs: [sub.slug] })}
                className="rounded-full bg-primary hover:bg-primary/90 px-7 h-12 font-semibold shadow-cta"
              >
                Find a Provider
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-7 h-12 font-semibold">
                <Link to="/pricing">See pricing</Link>
              </Button>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border/60 shadow-card">
            <img src={img} alt={sub.label} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-16 md:py-20">
        <div className="container-zoolio">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Other ways we care</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group bg-card rounded-2xl border border-border/60 overflow-hidden hover:border-primary/40 hover:shadow-card transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img src={SUB_IMAGES[s.slug]} alt={s.label} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground">{s.label}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{FUN_DESC[s.slug]}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default ServiceDetail;