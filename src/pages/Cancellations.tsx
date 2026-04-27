import { PageShell } from "@/components/zoolio/PageShell";
import { CalendarClock, Clock4 } from "lucide-react";

const items = [
  {
    icon: CalendarClock,
    title: "Daily Bookings",
    body: "Enjoy a 100% automatic refund when you cancel 5 or more days before your service starts.",
  },
  {
    icon: Clock4,
    title: "Hourly Bookings",
    body: "Enjoy a 100% automatic refund when you cancel 24 hours or more in advance.",
  },
];

const Cancellations = () => (
  <PageShell
    title="Cancellations — Flexible Plans for Happy Tails"
    description="Zoolio's flexible cancellation policy keeps Mzansi's pet community moving forward, even when plans change."
  >
    <section className="container-zoolio py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">Cancellations</span>
        <h1 className="mt-3 text-4xl md:text-6xl font-bold text-foreground tracking-tight">
          Flexible Plans for Happy Tails
        </h1>
        <p className="mt-5 text-lg md:text-xl text-muted-foreground leading-relaxed">
          Life happens, and we're here to make sure every change has a silver lining! We keep our policies flexible to protect everyone's time.
        </p>
      </div>

      <div className="mt-12 max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
        {items.map((it) => {
          const Icon = it.icon;
          return (
            <div key={it.title} className="bg-card border border-border/60 rounded-3xl p-7 shadow-soft hover:shadow-cta transition-shadow">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-foreground">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.body}</p>
            </div>
          );
        })}
      </div>

      <p className="mt-10 max-w-3xl mx-auto text-center text-muted-foreground">
        Our goal is to keep Mzansi's pet community moving forward with a smile, even when plans change!
      </p>
    </section>
  </PageShell>
);

export default Cancellations;