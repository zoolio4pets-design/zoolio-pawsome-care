import { useEffect, useState } from "react";
import {
  Menu,
  PawPrint,
  X,
  ChevronDown,
  Bed,
  KeyRound,
  Sparkles,
  Footprints,
  Home,
  Scissors,
  Fish,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const links = [
  { label: "Search Providers", href: "#services" },
  { label: "Become a Provider", href: "#become-sitter" },
];

const serviceLinks = [
  { label: "Boarding", icon: Bed },
  { label: "House Sitting", icon: KeyRound },
  { label: "Day Care", icon: Sparkles },
  { label: "Dog Walking", icon: Footprints },
  { label: "Drop-In Visits", icon: Home },
  { label: "Grooming", icon: Scissors },
  { label: "Exotic/Aquatic Care", icon: Fish },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60 shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container-zoolio flex h-16 md:h-20 items-center justify-between">
        <a href="/" className="flex items-center gap-2 font-display text-2xl font-bold text-primary">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">
            <PawPrint className="h-5 w-5" />
          </span>
          Zoolio
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary rounded-full hover:bg-secondary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary rounded-full hover:bg-secondary transition-colors outline-none">
              Provider Services <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 rounded-2xl">
              {serviceLinks.map((s) => (
                <DropdownMenuItem key={s.label} asChild className="rounded-xl">
                  <a href="#services" className="flex items-center gap-2 cursor-pointer">
                    <s.icon className="h-4 w-4 text-primary" />
                    {s.label}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Button className="rounded-full bg-primary hover:bg-primary/90 font-medium px-5">Login / Sign Up</Button>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="lg:hidden grid place-items-center h-10 w-10 rounded-full hover:bg-secondary"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <div className="container-zoolio py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-base font-medium rounded-lg hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}
            <div className="px-3 pt-3 pb-1 text-xs font-bold uppercase tracking-wide text-muted-foreground">
              Provider Services
            </div>
            {serviceLinks.map((s) => (
              <a
                key={s.label}
                href="#services"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg hover:bg-secondary"
              >
                <s.icon className="h-4 w-4 text-primary" />
                {s.label}
              </a>
            ))}
            <div className="flex gap-2 pt-3">
              <Button className="flex-1 rounded-full bg-primary">Login / Sign Up</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
