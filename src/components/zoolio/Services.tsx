import { ArrowRight } from "lucide-react";
import boarding from "@/assets/service-boarding.jpg";
import walking from "@/assets/service-walking.jpg";
import dropin from "@/assets/service-dropin.jpg";
import daycare from "@/assets/service-daycare.jpg";

const services = [
  { title: "Boarding", desc: "Overnight stays in a sitter's home", img: boarding, from: "R220" },
  { title: "House Sitting", desc: "Sitters care for pets in your home", img: dropin, from: "R280" },
  { title: "Drop-In Visits", desc: "30-min check-ins for food & cuddles", img: dropin, from: "R110" },
  { title: "Dog Walking", desc: "An hour of fresh air & exercise", img: walking, from: "R140" },
  { title: "Doggy Day Care", desc: "Daytime fun while you're at work", img: daycare, from: "R180" },
];

export const Services = () => (
  <section id="services" className="py-20 md:py-28 bg-background">
    <div className="container-zoolio">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">Services</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-foreground">
            Care for every kind of pet parent
          </h2>
        </div>
        <a href="#all-services" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
          Browse all services <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
        {services.map((s, i) => (
          <a
            key={s.title}
            href="#search"
            className="group relative overflow-hidden rounded-2xl bg-card shadow-soft hover:shadow-card transition-all duration-500 animate-fade-up"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={s.img}
                alt={s.title}
                loading="lazy"
                width={800}
                height={1000}
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 bg-gradient-to-t from-foreground/85 via-foreground/40 to-transparent text-background">
              <h3 className="font-display text-xl md:text-2xl font-semibold">{s.title}</h3>
              <p className="text-xs md:text-sm opacity-90 mt-1 hidden md:block">{s.desc}</p>
              <div className="mt-2 text-xs font-semibold opacity-95">From {s.from}/night</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);
