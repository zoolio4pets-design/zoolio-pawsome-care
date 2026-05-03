import { PageShell } from "@/components/zoolio/PageShell";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is Zoolio free?",
    a: "You bet! For pet parents, joining the party and finding your pet's soulmate is 100% free.",
  },
  {
    q: "Safety first?",
    a: "Always. Every provider is ID verified and community-vetted, so your peace of mind stays sky-high.",
  },
  {
    q: "How do I pay?",
    a: "Super simple and super safe! You pay through our secure platform, and we keep the vibes good by making sure everyone is protected.",
  },
  {
    q: "What if plans change?",
    a: "Every cloud has a silver lining! Life happens, so we keep things flexible: get a 100% refund on daily bookings cancelled 5+ days before the fun starts, or on hourly bookings cancelled 24+ hours before service time. Easy, breezy, happy!",
  },
  {
    q: "Can I message a Provider before booking?",
    a: "To keep everyone's details safe and secure, private messaging unlocks as soon as your booking payment is successful. Once unlocked, you can chat, share instructions, and get excited for your pet's adventure!",
  },
  {
    q: "What if I have a parrot, a python, or a hamster?",
    a: "We love them all! While dogs and cats are our most frequent flyers, Zoolio is home to specialized care for birds, fish, reptiles, exotic pets, and small superstars like rabbits and guinea pigs.",
  },
  {
    q: "How do Pet Profiles work?",
    a: "Think of it as a digital CV for your best friend! You create one reusable profile with their personality quirks, medical needs, and favorite photos. It makes booking any future service a breeze.",
  },
  {
    q: "When is a job officially 'completed'?",
    a: "After the service ends, a 72-hour safety window begins. If you're happy, you can click 'Job Completed' immediately! If you forget, our system assumes everything went perfectly and auto-completes the job after those 72 hours pass.",
  },
  {
    q: "How do Providers get their earnings?",
    a: "Once a job is completed and the safety window closes, funds clear into your secure Zoolio Wallet. From there, you can add your bank details and manually withdraw your money whenever you're ready for a payout.",
  },
];

const FAQ = () => (
  <PageShell
    title="No Stress, Just Paws-itive Vibes"
    description="Quick answers to the questions every Mzansi pet parent asks before booking trusted care on Zoolio."
  >
    <section className="container-zoolio py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">No Stress, Just Paws-itive Vibes</span>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold text-foreground tracking-tight">
          Big questions. Happy answers.
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Everything you need to know before booking trusted care for your fur, fin, or feather family — minus the boring bits.
        </p>

        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((f) => (
            <AccordionItem key={f.q} value={f.q}>
              <AccordionTrigger className="text-left text-base md:text-lg font-semibold">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  </PageShell>
);

export default FAQ;