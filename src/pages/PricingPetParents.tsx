import { PageShell } from "@/components/zoolio/PageShell";
import { ShieldCheck, Lock, MessageCircleHeart, PawPrint, RefreshCw } from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Mzansi's Best Heroes",
    body: "Every sitter is hand-verified and community-reviewed. Browse beautiful profiles, read real stories, and find the perfect match for your pet's unique personality.",
  },
  {
    icon: Lock,
    title: "The Safety Net",
    body: "Pay securely through our streamlined platform. We hold your payment safely and only release it to the provider when the tail starts wagging and the job is happily completed!",
  },
  {
    icon: MessageCircleHeart,
    title: "Updates & Smiles",
    body: "Chat directly with your provider on the platform. Get those much-needed photo updates and stay connected while your pet lives their best life.",
  },
  {
    icon: PawPrint,
    title: "Every Pet Invited",
    body: "From bouncy Great Danes to shimmering goldfish and curious chameleons, we have dedicated, loving specialists for every kind of best friend.",
  },
  {
    icon: RefreshCw,
    title: "Happy Refunds",
    body: "Life happens! Enjoy 100% automatic refunds for daily bookings (5+ days notice) and hourly bookings (24h+ notice). We keep it flexible so you can stay smiling.",
  },
];

const PricingPetParents = () => (
  <PageShell
    title="For Pet Parents — All the Love, None of the Worry"
    description="Joining the Zoolio family is 100% free. A safe, happy haven for Mzansi's pets so you can focus on your day with total peace of mind."
  >
    <section className="container-zoolio py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">For Pet Parents</span>
        <h1 className="mt-3 text-4xl md:text-6xl font-bold text-foreground tracking-tight">
          All the Love, None of the Worry!
        </h1>
        <p className="mt-5 text-lg md:text-xl text-muted-foreground leading-relaxed">
          Joining the Zoolio family is 100% free. We've built a safe, happy haven for Mzansi's pets so you can focus on your day with total peace of mind.
        </p>
      </div>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {benefits.map((b) => {
          const Icon = b.icon;
          return (
            <div
              key={b.title}
              className="bg-card border border-border/60 rounded-3xl p-7 shadow-soft hover:shadow-cta transition-shadow"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-foreground">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.body}</p>
            </div>
          );
        })}
      </div>
    </section>
  </PageShell>
);

export default PricingPetParents;