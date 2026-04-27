import { PageShell } from "@/components/zoolio/PageShell";
import { PawPrint, History, Heart, CalendarClock, Image as ImageIcon, Wallet } from "lucide-react";

const petParentItems = [
  { icon: PawPrint, title: "Update Pet Details", body: "Tweak names, photos, dietary notes, and quirky habits anytime—your pet's profile grows with them." },
  { icon: History, title: "View Booking History", body: "See every past adventure in one tidy timeline. Re-book your favourites in a tap." },
  { icon: Heart, title: "Manage Your Favourites", body: "Build a shortlist of local pet heroes you love, ready to call on whenever life gets busy." },
];

const providerItems = [
  { icon: CalendarClock, title: "Real-Time Availability & Rates", body: "Update your calendar and change service rates on the fly—your dashboard moves at your pace." },
  { icon: ImageIcon, title: "Fresh Gallery Photos", body: "Upload new snaps of your happy clients to show off your magic and attract more bookings." },
  { icon: Wallet, title: "Zoolio Wallet & Payouts", body: "Track your earnings in the Secure Safety Net and add your bank details for quick, easy payouts." },
];

const ItemGrid = ({ items }: { items: typeof petParentItems }) => (
  <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {items.map((s) => {
      const Icon = s.icon;
      return (
        <div key={s.title} className="bg-card border border-border/60 rounded-3xl p-7 shadow-soft hover:shadow-cta transition-shadow">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
            <Icon className="h-6 w-6" />
          </span>
          <h3 className="mt-5 text-lg font-bold text-foreground">{s.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
        </div>
      );
    })}
  </div>
);

const HowToManageProfile = () => (
  <PageShell
    title="How to Manage my Profile — Your Zoolio Dashboard"
    description="Easily manage your Zoolio profile, bookings, and gallery—whether you're a pet parent or a provider."
  >
    <section className="container-zoolio py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">Your Dashboard</span>
        <h1 className="mt-3 text-4xl md:text-6xl font-bold text-foreground tracking-tight">
          Make It Yours, In a Few Taps
        </h1>
        <p className="mt-5 text-lg md:text-xl text-muted-foreground leading-relaxed">
          Your Zoolio profile is your happy place. Here's how to keep it fresh, fun, and working hard for you.
        </p>
      </div>

      <div className="mt-16 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">For Pet Parents</h2>
        <p className="mt-2 text-muted-foreground">Keep your pet's story up to date and your favourite heroes close.</p>
        <ItemGrid items={petParentItems} />
      </div>

      <div className="mt-20 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">For Providers</h2>
        <p className="mt-2 text-muted-foreground">Your all-in-one command centre for a thriving pet care business.</p>
        <ItemGrid items={providerItems} />
      </div>
    </section>
  </PageShell>
);

export default HowToManageProfile;