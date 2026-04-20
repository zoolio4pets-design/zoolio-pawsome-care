// Zoolio service taxonomy — verbatim copy from product brief.
// Three main categories, each with subcategories (slugs are URL-safe).

export type SubServiceSlug =
  | "day-care"
  | "digital-events"
  | "dog-walking"
  | "drop-in-visits"
  | "wellness-grooming"
  | "boarding"
  | "house-sitting"
  | "aquatic"
  | "reptile-exotic"
  | "small-animal-bird";

export type CategorySlug = "daytime" | "overnight" | "other";

export interface SubService {
  slug: SubServiceSlug;
  label: string;
  shortDesc: string;     // "In your home | For dogs & cats"
  blurb: string;         // longer description for cards
  petTypes: ("dog" | "cat" | "aquatic" | "reptile" | "exotic" | "small-animal" | "bird")[];
}

export interface ServiceCategory {
  slug: CategorySlug;
  label: string;
  intro: string;
  subs: SubService[];
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    slug: "daytime",
    label: "Daytime Care",
    intro:
      "Get ready for daytime tail-wagging excitement! Zip through quick drop-in visits for yummy meals, potty breaks, and playful zoomies at home; hit the streets with invigorating neighbourhood walks full of sniffs and fresh air; dive into full-day playdates in a loving sitter's home or awesome facility; and top it off with luxurious grooming, wellness boosts, or even epic party planning and pro pet photoshoots. Pure joy all day!",
    subs: [
      {
        slug: "day-care",
        label: "Day Care",
        shortDesc: "In the sitter's home or in a facility | For dogs & cats",
        blurb: "Full-day playdates and supervised fun while you're at work.",
        petTypes: ["dog", "cat"],
      },
      {
        slug: "digital-events",
        label: "Digital & Event Services",
        shortDesc: "In your home or at an event | For dogs & cats",
        blurb: "Pet photography, party planning, and digital pet experiences.",
        petTypes: ["dog", "cat"],
      },
      {
        slug: "dog-walking",
        label: "Dog Walking",
        shortDesc: "In your neighbourhood | For dogs",
        blurb: "Invigorating neighbourhood walks full of sniffs and fresh air.",
        petTypes: ["dog"],
      },
      {
        slug: "drop-in-visits",
        label: "Drop In Visits",
        shortDesc: "In your home | For dogs & cats",
        blurb: "Quick check-ins for meals, potty breaks, and playful zoomies at home.",
        petTypes: ["dog", "cat"],
      },
      {
        slug: "wellness-grooming",
        label: "Health, Wellness & Grooming",
        shortDesc: "In your home | For dogs & cats",
        blurb: "Luxurious grooming, nail trims, and wellness sessions.",
        petTypes: ["dog", "cat"],
      },
    ],
  },
  {
    slug: "overnight",
    label: "Overnight Care",
    intro:
      "Turn your pet's night away into an epic adventure! Go for boarding—a super cozy sleepover at a trusted sitter's home packed with endless play, snuggles, and one-on-one fun. Or pick house sitting, where a pro stays right in your home to keep routines rocking and everything safe and sound. Your furry friend will be living their best life!",
    subs: [
      {
        slug: "boarding",
        label: "Boarding",
        shortDesc: "In sitter's home | For dogs & cats",
        blurb: "A cozy sleepover at a trusted sitter's home.",
        petTypes: ["dog", "cat"],
      },
      {
        slug: "house-sitting",
        label: "Pet & House Sitting",
        shortDesc: "In your home | For dogs & cats",
        blurb: "A pro stays in your home to keep routines rocking.",
        petTypes: ["dog", "cat"],
      },
    ],
  },
  {
    slug: "other",
    label: "Other Services",
    intro:
      "Who says fun is just for fluffballs? Splash into sparkling aquarium care for your fin-tastic fish friends, unlock expert magic for reptiles and exotics with that wow-factor touch, or shower birds and tiny superstars like rabbits, guinea pigs, and hamsters with gentle, giggly love. Every pet gets the VIP superstar treatment!",
    subs: [
      {
        slug: "aquatic",
        label: "Aquarium & Aquatic Services",
        shortDesc: "In your home | For aquatic pets",
        blurb: "Sparkling tank care for your fin-tastic friends.",
        petTypes: ["aquatic"],
      },
      {
        slug: "reptile-exotic",
        label: "Reptile & Exotic Pet Care",
        shortDesc: "In your home | For reptile & exotic pets",
        blurb: "Expert care for reptiles and exotics with wow-factor.",
        petTypes: ["reptile", "exotic"],
      },
      {
        slug: "small-animal-bird",
        label: "Small Animal & Bird Care",
        shortDesc: "In your home | For small animal & birds",
        blurb: "Gentle care for rabbits, guinea pigs, hamsters, and birds.",
        petTypes: ["small-animal", "bird"],
      },
    ],
  },
];

// Services where time-of-day filtering applies (Rover-style).
export const TIME_SLOT_SERVICES = new Set<SubServiceSlug>([
  "dog-walking",
  "drop-in-visits",
  "wellness-grooming",
  "day-care",
]);

export const TIME_SLOTS = [
  { value: "morning", label: "Morning", hours: "6am – 11am" },
  { value: "midday", label: "Midday", hours: "11am – 3pm" },
  { value: "evening", label: "Evening", hours: "3pm – 10pm" },
] as const;

export const ALL_SUBS: SubService[] = SERVICE_CATEGORIES.flatMap((c) => c.subs);

export const findSub = (slug: string): SubService | undefined =>
  ALL_SUBS.find((s) => s.slug === slug);

export const findCategory = (slug: string): ServiceCategory | undefined =>
  SERVICE_CATEGORIES.find((c) => c.slug === slug);

export const categoryForSub = (slug: SubServiceSlug): ServiceCategory | undefined =>
  SERVICE_CATEGORIES.find((c) => c.subs.some((s) => s.slug === slug));
