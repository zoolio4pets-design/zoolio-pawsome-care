import { PageShell } from "@/components/zoolio/PageShell";
import { Heart, ShieldCheck, MapPin } from "lucide-react";

const pillars = [
  { icon: ShieldCheck, title: "Trust First", body: "Verified providers, ID checks, and community reviews keep every booking safe." },
  { icon: Heart, title: "Pets Like Family", body: "Every wag, purr, chirp and splash gets the VIP treatment from people who care." },
  { icon: MapPin, title: "Proudly Mzansi", body: "Built locally for South African pet parents and caregivers, from Joburg to Cape Town." },
];

const About = () => (
  <PageShell
    title="About Us"
    description="Zoolio is South Africa's trusted community for loving pet care—built for pet parents and caregivers across Mzansi."
  >
    <section className="container-zoolio py-16 md:py-24">
      <div className="max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">About Zoolio</span>
        <h1 className="mt-3 text-4xl md:text-6xl font-bold text-foreground tracking-tight">
          South Africa's heart for pet care.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
          Zoolio is South Africa's heart for pet care. We are a secure community connecting loving
          pet owners with verified local caregivers. Whether it's a tail-wagging walk or a cozy
          overnight stay, our mission is to ensure every pet in Mzansi feels like family.
        </p>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground leading-relaxed">
          We've built a place where trust comes first and every pet gets the VIP treatment.
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