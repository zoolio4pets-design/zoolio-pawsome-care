import { Header } from "@/components/zoolio/Header";
import { HeroSearch } from "@/components/zoolio/HeroSearch";
import { Services } from "@/components/zoolio/Services";
import { HowItWorks } from "@/components/zoolio/HowItWorks";
import { TrustSafety } from "@/components/zoolio/TrustSafety";
import { Testimonials } from "@/components/zoolio/Testimonials";
import { BecomeSitter } from "@/components/zoolio/BecomeSitter";
import { Footer } from "@/components/zoolio/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Zoolio — Trusted Pet Care in South Africa";
    const desc = "Book verified pet sitters, dog walkers and boarding across South Africa. Insured, reviewed, and loved by 50,000+ local pet parents.";
    let m = document.querySelector('meta[name="description"]');
    if (!m) { m = document.createElement('meta'); m.setAttribute('name', 'description'); document.head.appendChild(m); }
    m.setAttribute('content', desc);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSearch />
      <Services />
      <HowItWorks />
      <TrustSafety />
      <Testimonials />
      <BecomeSitter />
      <Footer />
    </main>
  );
};

export default Index;
