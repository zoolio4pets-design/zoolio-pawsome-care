import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, PawPrint, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links: { label: string; href: string }[] = [
  { label: "Search Providers", href: "/#services" },
  { label: "Become a Provider", href: "/#become-sitter" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const goToHash = (href: string) => {
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (window.location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 50);
      }
    } else {
      navigate(href);
    }
  };

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
        <Link to="/" className="flex items-center gap-2 font-display text-2xl font-bold text-primary">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">
            <PawPrint className="h-5 w-5" />
          </span>
          Zoolio
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => goToHash(l.href)}
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary rounded-full hover:bg-secondary transition-colors"
            >
              {l.label}
            </button>
          ))}
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
              <button
                key={l.label}
                onClick={() => {
                  setOpen(false);
                  goToHash(l.href);
                }}
                className="text-left px-3 py-3 text-base font-medium rounded-lg hover:bg-secondary"
              >
                {l.label}
              </button>
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
