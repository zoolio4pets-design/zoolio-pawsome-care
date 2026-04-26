import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  Camera,
  PawPrint as PawIcon,
  Bird,
  Sun,
  Moon,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const links: { label: string; href: string }[] = [
  { label: "Search Providers", href: "/#services" },
  { label: "Become a Provider", href: "/#become-sitter" },
];

type ServiceGroup = {
  title: string;
  icon: typeof Sun;
  items: { label: string; icon: typeof Bed; slug: string }[];
};

const serviceGroups: ServiceGroup[] = [
  {
    title: "Daytime Care",
    icon: Sun,
    items: [
      { label: "Day Care", icon: Sparkles, slug: "day-care" },
      { label: "Dog Walking", icon: Footprints, slug: "dog-walking" },
      { label: "Drop-In Visits", icon: Home, slug: "drop-in-visits" },
      { label: "Health, Wellness & Grooming", icon: Scissors, slug: "wellness-grooming" },
      { label: "Digital & Event Services", icon: Camera, slug: "digital-events" },
    ],
  },
  {
    title: "Overnight Care",
    icon: Moon,
    items: [
      { label: "Boarding (in sitter's home)", icon: Bed, slug: "boarding" },
      { label: "Pet & House Sitting (in your home)", icon: KeyRound, slug: "house-sitting" },
    ],
  },
  {
    title: "Specialized Care",
    icon: Star,
    items: [
      { label: "Aquarium & Aquatic Services", icon: Fish, slug: "aquatic" },
      { label: "Reptile & Exotic Pet Care", icon: PawIcon, slug: "reptile-exotic" },
      { label: "Small Animal & Bird Care", icon: Bird, slug: "small-animal-bird" },
    ],
  },
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
            <DropdownMenuTrigger className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary rounded-full hover:bg-secondary transition-colors outline-none">
              Provider Services <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-72 rounded-2xl p-2">
              {serviceGroups.map((g, gi) => {
                const GIcon = g.icon;
                return (
                  <div key={g.title}>
                    {gi > 0 && <DropdownMenuSeparator className="my-1" />}
                    <DropdownMenuLabel className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-primary">
                      <GIcon className="h-3.5 w-3.5" />
                      {g.title}
                    </DropdownMenuLabel>
                    {g.items.map((s) => (
                      <DropdownMenuItem key={s.label} asChild className="rounded-xl">
                        <Link to={`/services/${s.slug}`} className="flex items-center gap-2 cursor-pointer pl-6">
                          <s.icon className="h-4 w-4 text-primary" />
                          {s.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </div>
                );
              })}
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
            {serviceGroups.map((g) => (
              <div key={g.title}>
                <div className="px-3 pt-3 pb-1 text-xs font-bold uppercase tracking-wide text-primary flex items-center gap-2">
                  <g.icon className="h-3.5 w-3.5" />
                  {g.title}
                </div>
                {g.items.map((s) => (
                  <Link
                    key={s.label}
                    to={`/services/${s.slug}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg hover:bg-secondary pl-6"
                  >
                    <s.icon className="h-4 w-4 text-primary" />
                    {s.label}
                  </Link>
                ))}
              </div>
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
