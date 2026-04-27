import { PageShell } from "@/components/zoolio/PageShell";
import { CreditCard, Lock, Timer, Wallet, Banknote } from "lucide-react";

const steps = [
  {
    icon: CreditCard,
    title: "Secure Upfront Payment",
    body: "Pet Parents pay securely through the platform when a booking is accepted.",
  },
  {
    icon: Lock,
    title: "Secure Handling",
    body: "We hold the funds safely during the entire service. The Provider only gets paid once the job is successfully completed.",
  },
  {
    icon: Timer,
    title: "The 72-Hour Cheer",
    body: "After the service ends, the 72-hour safety window begins. If you click 'Job Completed' (or after 72 hours of silence), the funds are cleared!",
  },
  {
    icon: Wallet,
    title: "Payouts",
    body: "Providers receive 80% of the booking fee directly into their Zoolio Wallet. The remaining 20% is dedicated to 'Platform Upkeep'—ensuring our community stays secure, ID verified, and ready for adventure.",
  },
  {
    icon: Banknote,
    title: "Quick Withdrawals",
    body: "Once cleared, Providers can simply add their bank details and withdraw their earnings whenever they like!",
  },
];

const PaymentFlow = () => (
  <PageShell
    title="Payment Flow — Simple, Secure, and Stress-Free"
    description="See exactly how Zoolio handles secure upfront payments, the 72-hour safety window, and quick provider withdrawals."
  >
    <section className="container-zoolio py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">Payment Flow</span>
        <h1 className="mt-3 text-4xl md:text-6xl font-bold text-foreground tracking-tight">
          Simple, Secure, and Stress-Free
        </h1>
        <p className="mt-5 text-lg md:text-xl text-muted-foreground leading-relaxed">
          We handle the 'boring' money stuff so you and the ID verified Provider can focus on the fun!
        </p>
      </div>

      <div className="mt-12 max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={s.title} className="bg-card border border-border/60 rounded-3xl p-7 shadow-soft hover:shadow-cta transition-shadow">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Step {i + 1}</span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          );
        })}
      </div>
    </section>
  </PageShell>
);

export default PaymentFlow;