import { PageShell } from "@/components/zoolio/PageShell";
import { ShieldCheck, Sparkles } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "The Safety Window",
    body: "Once a service is scheduled to end, you have a 72-hour window to click 'Job Completed' or 'Request a Refund' to let us know if something didn't go according to plan.",
  },
  {
    icon: Sparkles,
    title: "Easy Resolution",
    body: "If things don't go according to plan, simply 'Request a Refund' within that 72-hour window. We'll review the details to ensure a fair and positive outcome for everyone.",
  },
];

const Refunds = () => (
  <PageShell
    title="Refunds — The Zoolio Safety Net"
    description="Our Secure Safety Net keeps every Zoolio booking happy, with a 72-hour window to confirm or request a refund."
  >
    <section className="container-zoolio py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">Refunds</span>
        <h1 className="mt-3 text-4xl md:text-6xl font-bold text-foreground tracking-tight">
          The Zoolio Safety Net
        </h1>
        <p className="mt-5 text-lg md:text-xl text-muted-foreground leading-relaxed">
          Your peace of mind is our top priority! We use a 'Secure Safety Net' to keep every transaction happy.
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
        We're here to make sure every experience ends with a wagging tail!
      </p>
    </section>
  </PageShell>
);

export default Refunds;