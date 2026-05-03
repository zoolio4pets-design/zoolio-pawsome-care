import { useState } from "react";
import { ShieldCheck, Lock, Heart, TrendingUp, Wallet, CalendarCheck } from "lucide-react";
import { cn } from "@/lib/utils";

type Audience = "parents" | "providers";

const content: Record<Audience, { icon: typeof ShieldCheck; title: string; desc: string }[]> = {
  parents: [
    {
      icon: ShieldCheck,
      title: "ID Verified Heroes",
      desc: "Every provider undergoes mandatory biometric ID verification. Book with confidence knowing your pets are with trusted, local professionals.",
    },
    {
      icon: Lock,
      title: "The Secure Safety Net",
      desc: "Your payment is held in 'Secure Handling' and only released once the job is done. If plans change, our 72-hour safety window ensures a fair resolution.",
    },
    {
      icon: Heart,
      title: "All-in-One Care",
      desc: "From Great Danes to Goldfish and Exotic Animals, find expert care for every member of your family in one secure place.",
    },
  ],
  providers: [
    {
      icon: TrendingUp,
      title: "Thriving Business Tools",
      desc: "List multiple services, set your own rates, and highlight your unique expertise. Our dashboard gives you the professional edge to grow your pet care business.",
    },
    {
      icon: Wallet,
      title: "Guaranteed Payouts",
      desc: "No more chasing invoices. Once the 'Secure Safety Net' window passes, your earnings clear directly into your Zoolio Wallet for quick, easy withdrawals.",
    },
    {
      icon: CalendarCheck,
      title: "Protection for your Time",
      desc: "Your time is valuable. Our smart cancellation safeguards ensure that if a client cancels late, you still receive your payout for the reserved time.",
    },
  ],
};

export const TrustSafety = () => {
  const [audience, setAudience] = useState<Audience>("parents");
  const items = content[audience];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container-zoolio">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Why Choose Zoolio?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Your all-in-one 'Silver Lining' for secure, local, and professional pet care.
          </p>

          <div
            role="tablist"
            aria-label="Choose audience"
            className="mt-7 inline-flex items-center gap-1 rounded-full border border-border bg-card p-1 shadow-soft"
          >
            {(
              [
                { id: "parents" as const, label: "For Pet Parents" },
                { id: "providers" as const, label: "For Providers" },
              ]
            ).map((tab) => {
              const active = audience === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setAudience(tab.id)}
                  className={cn(
                    "px-5 md:px-6 py-2 md:py-2.5 rounded-full text-sm md:text-base font-semibold transition-all duration-300",
                    active
                      ? "bg-primary text-primary-foreground shadow-cta"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div
          key={audience}
          className="mt-14 md:mt-16 grid md:grid-cols-3 gap-8 md:gap-10 animate-fade-up"
        >
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <div key={it.title} className="text-center px-2">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-foreground">{it.title}</h3>
                <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed max-w-sm mx-auto">
                  {it.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};