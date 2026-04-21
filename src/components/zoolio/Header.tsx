import { useEffect, useState } from "react";
import { Menu, PawPrint, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Find Care", href: "#services" },
  { label: "Become a Sitter", href: "#become-sitter" },
  { label: "Dog Training", href: "#training" },
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
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Button variant="ghost" className="rounded-full font-medium">Sign in</Button>
          <Button className="rounded-full bg-primary hover:bg-primary/90 font-medium">Sign up</Button>
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
            <div className="flex gap-2 pt-3">
              <Button variant="outline" className="flex-1 rounded-full">Sign in</Button>
              <Button className="flex-1 rounded-full bg-primary">Sign up</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
