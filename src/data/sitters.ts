// Mock South African sitter dataset (~30 entries) for the /search page.
import { SA_LOCATIONS } from "./locations";
import type { SubServiceSlug } from "./services";

export interface Sitter {
  id: string;
  name: string;
  suburb: string;
  city: string;
  lat: number;
  lng: number;
  rating: number;
  reviews: number;
  pricePerNightZar: number;
  pricePerWalkZar: number;
  yearsExperience: number;
  services: SubServiceSlug[];
  availableTimeSlots: ("morning" | "midday" | "evening")[];
  attributes: {
    fencedYard: boolean;
    nonSmoking: boolean;
    noChildren: boolean;
    noOtherPets: boolean;
    acceptsPuppies: boolean;
    acceptsSeniorDogs: boolean;
    givesMedication: boolean;
  };
  acceptedSizes: ("small" | "medium" | "large" | "giant")[];
  bio: string;
  photo: string;
}

const NAMES = [
  "Thandi Mokoena", "Liam van der Merwe", "Naledi Khumalo", "Pieter Botha", "Zara Naidoo",
  "Sipho Dlamini", "Emma Pretorius", "Aisha Patel", "Jaco Steyn", "Lerato Sithole",
  "Hannah O'Connor", "Sibusiso Ndlovu", "Anke de Villiers", "Mpho Maluleka", "Chloe Smit",
  "Karabo Tshabalala", "Daniel Adams", "Nomusa Zulu", "Riaan Marais", "Kagiso Mabaso",
  "Sarah Williams", "Tariq Abrahams", "Bongi Cele", "Heinrich Roux", "Palesa Khoza",
  "Megan Joubert", "Sizwe Mthembu", "Yolande Coetzee", "Refilwe Phiri", "Marco Pereira",
];

const SERVICE_PRICES: Record<SubServiceSlug, number> = {
  "boarding": 280,
  "house-sitting": 320,
  "drop-in-visits": 130,
  "dog-walking": 150,
  "day-care": 220,
  "wellness-grooming": 350,
  "digital-events": 600,
  "aquatic": 250,
  "reptile-exotic": 280,
  "small-animal-bird": 180,
};

const PHOTO = (i: number) =>
  `https://images.unsplash.com/photo-${
    [
      "1544005313-94ddf0286df2", "1507003211169-0a1dd7228f2d", "1438761681033-6461ffad8d80",
      "1494790108377-be9c29b29330", "1500648767791-00dcc994a43e", "1531123897727-8f129e1688ce",
      "1573496359142-b8d87734a5a2", "1463453091185-61582044d556", "1517841905240-472988babdf9",
      "1539571696357-5a69c17a67c6",
    ][i % 10]
  }?w=400&h=400&fit=crop&crop=faces`;

function rand<T>(arr: T[], n: number): T[] {
  const a = [...arr].sort(() => Math.random() - 0.5);
  return a.slice(0, n);
}

const SERVICE_BUNDLES: SubServiceSlug[][] = [
  ["dog-walking", "drop-in-visits", "day-care"],
  ["boarding", "house-sitting", "drop-in-visits"],
  ["wellness-grooming", "drop-in-visits"],
  ["dog-walking", "drop-in-visits"],
  ["boarding", "day-care", "dog-walking"],
  ["aquatic"],
  ["reptile-exotic", "small-animal-bird"],
  ["small-animal-bird", "drop-in-visits"],
  ["digital-events"],
  ["house-sitting", "boarding", "wellness-grooming"],
];

// Deterministic-ish seed via index so list is stable across renders.
function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

export const SITTERS: Sitter[] = NAMES.map((name, i) => {
  const rng = seededRandom(i + 1);
  const loc = SA_LOCATIONS[i % SA_LOCATIONS.length];
  const services = SERVICE_BUNDLES[i % SERVICE_BUNDLES.length];
  const sizes = (["small", "medium", "large", "giant"] as const).filter(() => rng() > 0.25);
  const slots = (["morning", "midday", "evening"] as const).filter(() => rng() > 0.35);
  return {
    id: `sitter-${i + 1}`,
    name,
    suburb: loc.suburb,
    city: loc.city,
    lat: loc.lat + (rng() - 0.5) * 0.02,
    lng: loc.lng + (rng() - 0.5) * 0.02,
    rating: Math.round((4.4 + rng() * 0.6) * 10) / 10,
    reviews: Math.floor(10 + rng() * 240),
    pricePerNightZar: SERVICE_PRICES[services[0]] + Math.floor(rng() * 80),
    pricePerWalkZar: SERVICE_PRICES["dog-walking"] + Math.floor(rng() * 60),
    yearsExperience: 1 + Math.floor(rng() * 9),
    services,
    availableTimeSlots: slots.length ? slots : ["midday"],
    attributes: {
      fencedYard: rng() > 0.4,
      nonSmoking: rng() > 0.15,
      noChildren: rng() > 0.6,
      noOtherPets: rng() > 0.7,
      acceptsPuppies: rng() > 0.3,
      acceptsSeniorDogs: rng() > 0.3,
      givesMedication: rng() > 0.45,
    },
    acceptedSizes: sizes.length ? sizes : ["small", "medium"],
    bio: `${name.split(" ")[0]} is a verified Zoolio carer in ${loc.suburb} with ${
      1 + Math.floor(rng() * 9)
    } years of experience and a passion for ${services.includes("dog-walking") ? "active outdoor adventures" : "calm, attentive care"}.`,
    photo: PHOTO(i),
  };
});
