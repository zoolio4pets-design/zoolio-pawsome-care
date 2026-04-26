import { PageShell } from "@/components/zoolio/PageShell";
import { Heart, ShieldCheck, MapPin } from "lucide-react";

const pillars = [
  { icon: ShieldCheck, title: "Verified Heroes", body: "Every local pet hero is hand-verified and community-vetted, so peace of mind comes standard." },
  { icon: Heart, title: "Pets Like Family", body: "Every wag, purr, chirp and splash gets the full VIP treatment from humans who genuinely care." },
  { icon: MapPin, title: "Proudly Mzansi", body: "Built right here for South African pet parents and caregivers — from Joburg to Cape Town and everywhere in between." },
];

const About = () => (
  <PageShell
    title="The Zoolio Story"
    description="Zoolio is Mzansi's biggest celebration of paws, scales, and tails — a community of pet-obsessed humans making every pet's day the best day."
  >
    <section className="container-zoolio py-16 md:py-24">
      <div className="max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">The Zoolio Story</span>
        <h1 className="mt-3 text-4xl md:text-6xl font-bold text-foreground tracking-tight">
          Mzansi's biggest celebration of paws, scales & tails.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
          Zoolio is Mzansi's biggest celebration of paws, scales, and tails! We aren't just a
          platform — we're a community of pet-obsessed humans making sure every furry friend in
          South Africa lives their absolute best life.
        </p>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground leading-relaxed">
          We believe every pet deserves a best friend even when you're away, and every local pet
          hero deserves a chance to shine. We're here to make pet care the most exciting part of
          your day!
        </p>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-6">
        {pillars.map((p) => (
          <div key={p.title} className="bg-card border border-border/60 rounded-2xl p-6 hover:shadow-card transition-shadow">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary">
              <p.icon className="h-6 w-6" />
            </span>
            <h3 className="mt-4 text-xl font-bold text-foreground">{p.title}</h3>
            <p className="mt-2 text-muted-foreground leading-relaxed">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  </PageShell>
);

export default About;