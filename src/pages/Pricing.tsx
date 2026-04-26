import { PageShell } from "@/components/zoolio/PageShell";
import { Check, Heart, Sparkles, Lock } from "lucide-react";

const Pricing = () => (
  <PageShell
    title="Pricing & Payments"
    description="Zoolio is free for pet parents. Providers grow their business for a simple R99/month subscription."
  >
    <section className="container-zoolio py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">Pricing & Payments</span>
        <h1 className="mt-3 text-4xl md:text-6xl font-bold text-foreground tracking-tight">
          Simple, fair, transparent.
        </h1>
        <p className="mt-5 text-lg md:text-xl text-muted-foreground leading-relaxed">
          No hidden fees. Just loving care, safely paid.
        </p>
      </div>

      <div className="mt-14 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="bg-card border border-border/60 rounded-3xl p-8 md:p-10">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary">
            <Heart className="h-6 w-6" />
          </span>
          <h2 className="mt-5 text-2xl md:text-3xl font-bold text-foreground">For Pet Parents</h2>
          <p className="mt-2 text-4xl md:text-5xl font-bold text-primary">Free</p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Zoolio is free for clients. You only pay the listed price for the care your pet receives.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-foreground/80">
            {["Free to join and browse", "Verified local caregivers", "Secure platform payments"].map((i) => (
              <li key={i} className="flex items-start gap-2">
                <Check className="h-4 w-4 text-primary mt-1 shrink-0" /> {i}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-10 shadow-cta">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-primary-foreground/15">
            <Sparkles className="h-6 w-6" />
          </span>
          <h2 className="mt-5 text-2xl md:text-3xl font-bold">For Providers</h2>
          <p className="mt-2 text-4xl md:text-5xl font-bold">
            R99<span className="text-xl font-semibold opacity-80">/month</span>
          </p>
          <p className="mt-4 leading-relaxed opacity-90">
            Grow your pet care business for a simple subscription of R99/month. No hidden fees, just more happy clients.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {["Unlimited bookings", "Profile in local search", "Reviews & community trust"].map((i) => (
              <li key={i} className="flex items-start gap-2">
                <Check className="h-4 w-4 mt-1 shrink-0" /> {i}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-14 max-w-3xl mx-auto bg-secondary/40 border border-border/60 rounded-2xl p-6 md:p-8 flex gap-4">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary shrink-0">
          <Lock className="h-6 w-6" />
        </span>
        <div>
          <h3 className="text-lg md:text-xl font-bold text-foreground">Secure handling, every time</h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            We handle the logistics so you don't have to. Our secure system holds payments safely
            until the service is finished, protecting both pet parents and sitters.
          </p>
        </div>
      </div>
    </section>
  </PageShell>
);

export default Pricing;