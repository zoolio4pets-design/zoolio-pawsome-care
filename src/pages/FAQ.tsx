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
    a: "Always. Every provider is hand-verified and community-vetted, so your peace of mind stays sky-high.",
  },
  {
    q: "How do I pay?",
    a: "Super simple and super safe! You pay through our secure platform, and we keep the vibes good by making sure everyone is protected.",
  },
  {
    q: "What if plans change?",
    a: "Every cloud has a silver lining! Life happens, so we keep things flexible: get a 100% refund on daily bookings cancelled 5+ days before the fun starts, or on hourly bookings cancelled 24+ hours before service time. Easy, breezy, happy!",
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