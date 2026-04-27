import { PageShell } from "@/components/zoolio/PageShell";
import { MousePointerClick, MailCheck, PawPrint, UserPlus, BadgeCheck, CreditCard, Sparkles } from "lucide-react";

const petParentSteps = [
  { icon: MousePointerClick, title: "Click 'Sign Up'", body: "Choose 'Become a Client' and kick off your Zoolio adventure in seconds." },
  { icon: MailCheck, title: "Verify Your Email", body: "Pop into your inbox and confirm your email to officially join the pack." },
  { icon: PawPrint, title: "Create Your Pet Profile", body: "Add names, photos, and all those quirky personality traits that make your best friend special!" },
];

const providerSteps = [
  { icon: UserPlus, title: "Click 'Become a Provider'", body: "Enter your basic details and tell us a little about who you are." },
  { icon: BadgeCheck, title: "Instant ID Verification", body: "Complete our secure, instant ID Verification—quick, simple, and safe." },
  { icon: CreditCard, title: "Start Your Subscription", body: "Add your card details to start your R99/month subscription. That's it for the boring bit!" },
  { icon: Sparkles, title: "Build Your Profile", body: "Set your rates, upload your gallery, and get ready for your first booking request!" },
];

const StepGrid = ({ steps }: { steps: typeof petParentSteps }) => (
  <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
);

const HowToSignUp = () => (
  <PageShell
    title="How to Sign Up — Welcome to the Pack"
    description="A simple, joyful guide to joining Zoolio—whether you're a pet parent or a pet care provider in South Africa."
  >
    <section className="container-zoolio py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">Getting Started</span>
        <h1 className="mt-3 text-4xl md:text-6xl font-bold text-foreground tracking-tight">
          Welcome to the Pack!
        </h1>
        <p className="mt-5 text-lg md:text-xl text-muted-foreground leading-relaxed">
          Joining Zoolio is fast, friendly, and 100% Mzansi. Pick your path below and let's get you started.
        </p>
      </div>

      <div className="mt-16 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">For Pet Parents</h2>
        <p className="mt-2 text-muted-foreground">The 3-step joy to finding your pet's perfect hero.</p>
        <StepGrid steps={petParentSteps} />
      </div>

      <div className="mt-20 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">For Providers</h2>
        <p className="mt-2 text-muted-foreground">Your journey to a paws-itive pet care business.</p>
        <StepGrid steps={providerSteps} />
      </div>
    </section>
  </PageShell>
);

export default HowToSignUp;