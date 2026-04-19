import { Search, MessageCircle, Heart } from "lucide-react";

const steps = [
  { icon: Search, title: "Search", desc: "Browse verified sitters near you. Filter by service, price, and pet preferences." },
  { icon: MessageCircle, title: "Meet & book", desc: "Message sitters, schedule a free meet-and-greet, then book securely on Zoolio." },
  { icon: Heart, title: "Relax", desc: "Get photo updates throughout the stay. Pay safely only when the booking is confirmed." },
];

export const HowItWorks = () => (
  <section className="py-20 md:py-28 bg-secondary/40">
    <div className="container-zoolio">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-bold uppercase tracking-widest text-accent">How Zoolio works</span>
        <h2 className="mt-3 text-4xl md:text-5xl font-bold">Booking pet care, made simple</h2>
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
