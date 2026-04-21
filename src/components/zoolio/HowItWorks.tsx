import { Search, CreditCard, Heart } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Search",
    desc: "Read verified reviews by pet parents like you and choose a screened sitter who's a great match for you and your pets.",
  },
  {
    icon: CreditCard,
    title: "Book & pay",
    desc: "No cash or checks needed—we make it simple to book and make secured payments through our website or app.",
  },
  {
    icon: Heart,
    title: "Relax",
    desc: "Stay in touch with photos and messaging. Plus, your booking is backed by ZoolioProtect, including 24/7 support and reimbursement for eligible vet care.",
  },
];

export const HowItWorks = () => (
  <section className="py-20 md:py-28 bg-secondary/40">
    <div className="container-zoolio">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-xs font-bold uppercase tracking-widest text-accent">How Zoolio works</span>
        <h2 className="mt-3 text-4xl md:text-5xl font-bold">Meet local sitters who will treat your pets like family</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {steps.map((s, i) => (
          <div
            key={s.title}
            className="relative bg-card rounded-3xl p-8 shadow-soft hover:shadow-card transition-all animate-fade-up"
            style={{ animationDelay: `${i * 120}ms` }}
          >
            <div className="absolute -top-4 -right-4 font-display text-7xl font-bold text-primary/10 select-none">
              {i + 1}
            </div>
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary">
              <s.icon className="h-7 w-7" />
            </div>
            <h3 className="mt-6 text-2xl font-semibold">{s.title}</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
