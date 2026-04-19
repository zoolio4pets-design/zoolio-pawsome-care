import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const BecomeSitter = () => (
  <section id="become-sitter" className="py-20 md:py-28 bg-primary text-primary-foreground relative overflow-hidden">
    <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary-glow/30 blur-3xl" />
    <div className="absolute -left-24 -bottom-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />

    <div className="container-zoolio relative grid lg:grid-cols-2 gap-10 items-center">
      <div>
        <span className="text-xs font-bold uppercase tracking-widest text-accent">Earn with Zoolio</span>
        <h2 className="mt-3 text-4xl md:text-5xl font-bold">Turn your love of pets into a side hustle</h2>
        <p className="mt-5 text-lg text-primary-foreground/80 max-w-lg">
          Set your own rates, choose your own schedule, and earn from R8,000 a month caring for pets in your area.
        </p>
        <Button className="mt-8 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-cta h-12 px-7 font-semibold">
          Become a sitter <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-4 md:gap-6">
        {[
          { stat: "R8k+", label: "Avg. monthly earnings" },
          { stat: "50k+", label: "Active pet parents" },
          { stat: "4.9★", label: "Average sitter rating" },
        ].map((s) => (
          <div key={s.label} className="bg-primary-foreground/5 backdrop-blur border border-primary-foreground/10 rounded-2xl p-5 text-center">
            <div className="font-display text-3xl md:text-4xl font-bold">{s.stat}</div>
            <div className="mt-2 text-xs text-primary-foreground/70">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
