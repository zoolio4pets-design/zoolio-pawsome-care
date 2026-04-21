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
        blurb: "Give your dog playtime in a fun, safe environment while you're away. Choose between a trusted sitter's home or a local day care centre.",
        petTypes: ["dog", "cat"],
      },
      {
        slug: "digital-events",
        label: "Digital & Event Services",
        shortDesc: "In your home or at an event | For dogs & cats",
        blurb: "Tail-Wagging Celebrations & Snaps. From glamorous paw-ty planning to paws-itively perfect photography, treat your fur-babies like the true celebs.",
        petTypes: ["dog", "cat"],
      },
      {
        slug: "dog-walking",
        label: "Dog Walking",
        shortDesc: "In your neighbourhood | For dogs",
        blurb: "Unleash the excitement with action-packed neighbourhood adventures! Give your energetic pup the ultimate workout—full of fresh air, joyful sniffs, potty breaks, and boundless exploration alongside a trusted walker who knows how to make every stride epic.",
        petTypes: ["dog"],
      },
      {
        slug: "drop-in-visits",
        label: "Drop In Visits",
        shortDesc: "In your home | For dogs & cats",
        blurb: "Drop-in visits are perfect for cats and independent pups who just need a sitter to drop by your home one or more times a day. Your pets can get potty breaks, a clean litter box, playtime, meals, and more.",
        petTypes: ["dog", "cat"],
      },
      {
        slug: "wellness-grooming",
        label: "Health, Wellness & Grooming",
        shortDesc: "In your home | For dogs & cats",
        blurb: "For your pets who deserve to look good and feel good. From grooming and nail trims to wellness and fitness care — all the pampering, minus the vet visit.",
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
        blurb: "Transform your pet's night away into a thrilling sleepover adventure! Your dog or cat gets VIP treatment in a trusted sitter's cozy home—packed with playful energy, endless snuggles, and personalized fun that keeps tails wagging all night long.",
        petTypes: ["dog", "cat"],
      },
      {
        slug: "house-sitting",
        label: "Pet & House Sitting",
        shortDesc: "In your home | For dogs & cats",
        blurb: "Travel stress-free knowing your pet and home are being looked after. Book a trusted pet or house sitter on Zoolio to stay in your home and keep your pets in routine.",
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
        blurb: "Crystal-clear tanks and happy fins. Expert care for aquariums, ponds, and aquatic pets while you sit back and enjoy the view.",
        petTypes: ["aquatic"],
      },
      {
        slug: "reptile-exotic",
        label: "Reptile & Exotic Pet Care",
        shortDesc: "In your home | For reptile & exotic pets",
        blurb: "Not all pets are fluffy. Specialised care for reptiles, amphibians, and exotic pets that need a little extra know-how.",
        petTypes: ["reptile", "exotic"],
      },
      {
        slug: "small-animal-bird",
        label: "Small Animal & Bird Care",
        shortDesc: "In your home | For small animal & birds",
        blurb: "Big love for the little ones. Gentle, knowledgeable care for birds and small pets like rabbits, guinea pigs, and hamsters.",
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

// Duration options (single-select) for hourly-billed services.
// Shown only when the selected sub-service is in TIME_SLOT_SERVICES.
export const DURATIONS = [
  { value: "30", label: "30 min", minutes: 30 },
  { value: "60", label: "60 min", minutes: 60 },
  { value: "90", label: "90 min", minutes: 90 },
  { value: "120", label: "2 hrs", minutes: 120 },
  { value: "180", label: "3 hrs", minutes: 180 },
  { value: "240", label: "4+ hrs", minutes: 240 },
] as const;

// Simplified duration set used in the hero "When" block (Rover-style minimal chips).
export const HERO_DURATIONS = [
  { value: "30", label: "30 min" },
  { value: "60", label: "60 min" },
  { value: "90", label: "90 min" },
  { value: "120", label: "2 hrs" },
  { value: "180", label: "3+ hrs" },
] as const;

export type DurationValue = (typeof DURATIONS)[number]["value"];

export const formatDurationLabel = (v?: string) =>
  DURATIONS.find((d) => d.value === v)?.label ?? "";

export const ALL_SUBS: SubService[] = SERVICE_CATEGORIES.flatMap((c) => c.subs);

export const findSub = (slug: string): SubService | undefined =>
  ALL_SUBS.find((s) => s.slug === slug);

export const findCategory = (slug: string): ServiceCategory | undefined =>
  SERVICE_CATEGORIES.find((c) => c.slug === slug);

export const categoryForSub = (slug: SubServiceSlug): ServiceCategory | undefined =>
  SERVICE_CATEGORIES.find((c) => c.subs.some((s) => s.slug === slug));
