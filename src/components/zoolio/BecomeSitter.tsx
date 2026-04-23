import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const BecomeSitter = () => (
  <section
    id="become-sitter"
    className="py-20 md:py-28 bg-primary text-primary-foreground relative overflow-hidden"
  >
    <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary-glow/30 blur-3xl" />
    <div className="absolute -left-24 -bottom-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />

    <div className="container-zoolio relative text-center max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold leading-tight">
        Ready to find the perfect match for your pet?
      </h2>
      <p className="mt-5 text-lg md:text-xl text-primary-foreground/85">
        Joining Zoolio is completely free for pet owners.
      </p>
      <Button className="mt-8 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-cta h-12 px-8 font-semibold">
        Create a Free Account <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  </section>
);
