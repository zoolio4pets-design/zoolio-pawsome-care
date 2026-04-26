import { PawPrint, Linkedin, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

type FooterLink = { label: string; to: string };
const cols: { title: string; links: FooterLink[] }[] = [
  { title: "Services", links: [{ label: "The Good Stuff (Pricing)", to: "/pricing" }] },
  { title: "Company", links: [{ label: "About Us", to: "/about" }, { label: "FAQ", to: "/faq" }] },
  { title: "Legal", links: [{ label: "Terms", to: "#" }, { label: "Privacy Policy", to: "#" }] },
];

export const Footer = () => (
  <footer className="bg-foreground text-background pt-20 pb-10">
    <div className="container-zoolio">
      <div className="grid lg:grid-cols-6 gap-10">
        <div className="lg:col-span-3">
          <Link to="/" className="flex items-center gap-2 font-display text-2xl font-bold">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-accent-foreground">
              <PawPrint className="h-5 w-5" />
            </span>
            Zoolio
          </Link>
          <p className="mt-4 text-background/70 text-sm leading-relaxed max-w-xs">
            South Africa's trusted marketplace for loving pet care. Built locally, for locals.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Linkedin].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social link" className="grid h-10 w-10 place-items-center rounded-full bg-background/10 hover:bg-accent transition-colors">
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
                <li key={l.label}>
                  <Link to={l.to} className="text-sm text-background/70 hover:text-accent transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-background/10 text-center text-xs text-background/60">
        © 2026 with ♥ by Zoolio
      </div>
    </div>
  </footer>
);
