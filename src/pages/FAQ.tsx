import { PageShell } from "@/components/zoolio/PageShell";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is Zoolio free to use?",
    a: "Yes! For pet parents, joining and browsing our community is 100% free.",
  },
  {
    q: "How do I know my pet is safe?",
    a: "Every provider on Zoolio undergoes a verification process, including ID checks and community reviews, so you can book with total peace of mind.",
  },
  {
    q: "How do I pay?",
    a: "Payments are handled safely and securely through our platform. Your funds are only released once the job is successfully completed.",
  },
  {
    q: "What is the cancellation policy?",
    a: "Life happens! You'll receive a 100% automatic refund if you cancel more than 5 days before the service begins.",
  },
];

const FAQ = () => (
  <PageShell
    title="FAQ"
    description="Answers to the most common questions about Zoolio—South Africa's trusted pet care marketplace."
  >
    <section className="container-zoolio py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">FAQ</span>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold text-foreground tracking-tight">
          Quick answers, happy tails.
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Everything you need to know before booking trusted care for your fur, fin, or feather family.
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