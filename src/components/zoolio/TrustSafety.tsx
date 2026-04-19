import { ShieldCheck, BadgeCheck, Headphones, HandCoins } from "lucide-react";
import { Button } from "@/components/ui/button";
import trustImg from "@/assets/trust-section.jpg";

const items = [
  { icon: BadgeCheck, title: "Verified sitters", desc: "Every Zoolio sitter passes ID and background checks before joining." },
  { icon: ShieldCheck, title: "ZoolioProtect cover", desc: "Up to R50,000 vet care guarantee on every confirmed booking." },
  { icon: Headphones, title: "24/7 SA support", desc: "Real humans in Cape Town and Joburg, ready whenever you need help." },
  { icon: HandCoins, title: "Secure payments", desc: "Pay in ZAR. Funds only release to your sitter once the stay is complete." },
];

export const TrustSafety = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container-zoolio grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <div className="relative">
        <img
          src={trustImg}
          alt="A happy family with their dogs at home"
          loading="lazy"
          width={1400}
          height={1000}
          className="rounded-3xl shadow-card w-full h-auto object-cover aspect-[4/3]"
        />
        <div className="absolute -bottom-6 -right-6 hidden md:block bg-card rounded-2xl shadow-card p-5 border border-border max-w-[220px]">
          <div className="flex items-center gap-2 text-accent">
            {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
          </div>
          <p className="mt-2 text-sm text-foreground/80">"Best decision we made for our pups when we travel."</p>
          <p className="mt-2 text-xs font-semibold text-muted-foreground">— Lerato, Sandton</p>
        </div>
      </div>

      <div>
        <span className="text-xs font-bold uppercase tracking-widest text-accent">Trust & Safety</span>
        <h2 className="mt-3 text-4xl md:text-5xl font-bold">Peace of mind, paw-print promised</h2>
        <p className="mt-5 text-lg text-muted-foreground">
          Zoolio was built in South Africa, for South Africans. Every booking is backed by our protection guarantee and a team that actually picks up the phone.
        </p>

        <div className="mt-8 grid sm:grid-cols-2 gap-5">
          {items.map((it) => (
            <div key={it.title} className="flex gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <it.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">{it.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <Button className="mt-8 rounded-full bg-primary hover:bg-primary/90 px-7 h-12 font-semibold">
          Learn about ZoolioProtect
        </Button>
      </div>
    </div>
  </section>
);
