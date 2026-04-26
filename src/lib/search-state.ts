// Shared hook + helpers for the (now decommissioned) search flow.
// We keep the types/hook signature so callers compile, but `useGoToSearch`
// now smoothly scrolls to the on-page Services section and shows a
// "Coming soon" toast instead of navigating to a results page.
import { useCallback } from "react";
import type { DateRange } from "react-day-picker";
import type { CategorySlug, SubServiceSlug } from "@/data/services";
import { toast } from "@/hooks/use-toast";

export type PetSize = "small" | "medium" | "large" | "giant";
export interface Pet {
  id: string;
  type: "dog" | "cat" | "other";
  size: PetSize;
  breed: string;
  ageYears: number;
  specialNeeds: string;
}

export interface SearchState {
  category: CategorySlug;
  subs: SubServiceSlug[];
  location: string;
  dates?: DateRange;
  pets: Pet[];
  timeSlots: string[];
  sizes: PetSize[];
  attrs: string[];
  duration?: string;
}

export const ATTR_LABELS: Record<string, string> = {
  fencedYard: "Fenced yard",
  nonSmoking: "Non-smoking home",
  noChildren: "Has no children",
  noOtherPets: "Has no other pets",
  acceptsPuppies: "Accepts puppies",
  acceptsSeniorDogs: "Accepts senior dogs",
  givesMedication: "Gives medication",
};

export const PET_SIZES: { value: PetSize; label: string }[] = [
  { value: "small", label: "Small (0–7kg)" },
  { value: "medium", label: "Medium (7–18kg)" },
  { value: "large", label: "Large (18–40kg)" },
  { value: "giant", label: "Giant (40kg+)" },
];

export function useGoToSearch() {
  return useCallback((_s: Partial<SearchState>) => {
    if (typeof window !== "undefined") {
      // If we're on the home page, scroll to services. Otherwise navigate home.
      if (window.location.pathname === "/") {
        document.getElementById("services")?.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.location.href = "/#services";
      }
    }
    toast({
      title: "Provider search is coming soon",
      description: "We're polishing this experience for you. Stay tuned!",
    });
  }, []);
}
