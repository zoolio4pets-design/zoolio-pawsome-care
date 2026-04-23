import { BadgeCheck, Lock, CalendarX } from "lucide-react";

const items = [
  {
    icon: BadgeCheck,
    title: "Verified Caregivers",
    desc: "Book trusted local providers easily.",
  },
  {
    icon: Lock,
    title: "Secure Payments",
    desc: "Pay safely upfront through the platform.",
  },
  {
    icon: CalendarX,
    title: "Stress-Free Cancellations",
    desc: "Enjoy flexibility with a 100% refund if you cancel more than 5 days before the service start date for daily services, and a refund if you cancel 24 hours before service start date for hourly services.",
  },
];

export const TrustSafety = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container-zoolio">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Why Choose Zoolio?</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Built locally for South African pet parents who want simple, safe, and loving care.
        </p>
      </div>

      <div className="mt-14 md:mt-16 grid md:grid-cols-3 gap-8 md:gap-10">
        {items.map((it) => (
          <div key={it.title} className="text-center px-2">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-primary/10 text-primary">
              <it.icon className="h-7 w-7" />
            </div>
            <h3 className="mt-5 text-xl font-bold text-foreground">{it.title}</h3>
            <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed max-w-sm mx-auto">
              {it.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
