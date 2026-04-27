import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, PawPrint, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICE_CATEGORIES } from "@/data/services";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
          <DropdownMenu>
            <DropdownMenuTrigger className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary rounded-full hover:bg-secondary transition-colors inline-flex items-center gap-1 outline-none">
              Provider Services
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-72 rounded-2xl p-2">
              {SERVICE_CATEGORIES.map((cat, idx) => (
                <div key={cat.slug}>
                  {idx > 0 && <DropdownMenuSeparator />}
                  <DropdownMenuLabel className="text-xs font-bold uppercase tracking-wide text-muted-foreground px-2 pt-2">
                    {cat.label}
                  </DropdownMenuLabel>
                  {cat.subs.map((sub) => (
                    <DropdownMenuItem
                      key={sub.slug}
                      onClick={() => navigate(`/services/${sub.slug}`)}
                      className="rounded-lg cursor-pointer text-sm"
                    >
                      {sub.label}
                    </DropdownMenuItem>
                  ))}
                </div>
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
            <details className="group">
              <summary className="list-none flex items-center justify-between px-3 py-3 text-base font-medium rounded-lg hover:bg-secondary cursor-pointer">
                Provider Services
                <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="pl-2 pb-2">
                {SERVICE_CATEGORIES.map((cat) => (
                  <div key={cat.slug} className="mt-2">
                    <div className="px-3 py-1 text-xs font-bold uppercase tracking-wide text-muted-foreground">
                      {cat.label}
                    </div>
                    {cat.subs.map((sub) => (
                      <button
                        key={sub.slug}
                        onClick={() => {
                          setOpen(false);
                          navigate(`/services/${sub.slug}`);
                        }}
                        className="w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-secondary"
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            </details>
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
