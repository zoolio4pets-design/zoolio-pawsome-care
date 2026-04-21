import { PawPrint, Instagram, Facebook, Twitter } from "lucide-react";

const cols = [
  { title: "Services", links: ["Dog Boarding", "House Sitting", "Drop-In Visits", "Dog Walking", "Doggy Day Care", "Dog Training"] },
  { title: "Cities", links: ["Cape Town", "Johannesburg", "Durban", "Pretoria", "Stellenbosch", "Port Elizabeth"] },
  { title: "Company", links: ["About Zoolio"] },
  { title: "Legal", links: ["Terms", "Privacy", "Cookie Settings"] },
];

export const Footer = () => (
  <footer className="bg-foreground text-background pt-20 pb-10">
    <div className="container-zoolio">
      <div className="grid lg:grid-cols-6 gap-10">
        <div className="lg:col-span-2">
          <a href="/" className="flex items-center gap-2 font-display text-2xl font-bold">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-accent-foreground">
              <PawPrint className="h-5 w-5" />
            </span>
            Zoolio
          </a>
          <p className="mt-4 text-background/70 text-sm leading-relaxed max-w-xs">
            South Africa's trusted marketplace for loving pet care. Built locally, for locals.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-full bg-background/10 hover:bg-accent transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="font-semibold text-sm mb-4">{c.title}</h4>
            <ul className="space-y-3">
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-background/70 hover:text-accent transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-background/60">
        <div>© {new Date().getFullYear()} Zoolio (Pty) Ltd. Made with ♥ in South Africa. Prices in ZAR.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-accent">Sitemap</a>
          <a href="#" className="hover:text-accent">Accessibility</a>
          <a href="#" className="hover:text-accent">POPIA</a>
        </div>
      </div>
    </div>
  </footer>
);
