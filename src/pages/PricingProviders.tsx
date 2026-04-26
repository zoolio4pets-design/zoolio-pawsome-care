import { PageShell } from "@/components/zoolio/PageShell";
import { CalendarCheck, Wallet, Star, ShieldCheck, LayoutDashboard } from "lucide-react";

const benefits = [
  {
    icon: CalendarCheck,
    title: "Be Your Own Boss",
    body: "You are in complete control! Set your own schedule, choose the exact services you want to offer, and set your own rates. Work when you want, how you want.",
  },
  {
    icon: Wallet,
    title: "No More Chasing Cash",
    body: "Say goodbye to awkward money talks! Clients pay upfront, and our secure system handles the collection. Once the job is done, your earnings are safely cleared into your Zoolio Wallet.",
  },
  {
    icon: Star,
    title: "Build Your Reputation",
    body: "Collect glowing reviews from happy pet parents and watch your business soar. The more love you give, the more you stand out in the community!",
  },
  {
    icon: ShieldCheck,
    title: "Cancellation Protection",
    body: "Your time is incredibly valuable. If a client cancels late, our safety net ensures you still get rewarded for your commitment.",
  },
  {
    icon: LayoutDashboard,
    title: "All-in-One Dashboard",
    body: "Manage your calendar, chat with clients, accept bookings, and track your success all from one sleek, easy-to-use platform designed just for you.",
  },
];

const PricingProviders = () => (
  <PageShell
    title="For Providers — Turn Your Passion into a Paws-itive Business"
    description="Just R99/month to unlock your pet care empire in South Africa. We handle the boring stuff so you can focus on the animals."
  >
    <section className="container-zoolio py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">For Providers</span>
        <h1 className="mt-3 text-4xl md:text-6xl font-bold text-foreground tracking-tight">
          Turn Your Passion into a Paws-itive Business!
        </h1>
        <p className="mt-5 text-lg md:text-xl text-muted-foreground leading-relaxed">
          For just <span className="font-bold text-primary">R99/month</span>, unlock your pet care empire. We handle the boring stuff so you can focus on doing what you love: spending time with amazing animals.
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

export default PricingProviders;