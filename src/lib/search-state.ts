// Shared hook + helpers for serialising search state into URL query params.
import { useCallback, useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import type { DateRange } from "react-day-picker";
import type { CategorySlug, SubServiceSlug } from "@/data/services";
import type { Pet, PetSize } from "@/components/zoolio/PetDetailsModal";

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

const KNOWN_ATTRS = ["fencedYard", "nonSmoking", "noChildren", "noOtherPets", "acceptsPuppies", "acceptsSeniorDogs", "givesMedication"];

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

export function encodeSearchToParams(s: Partial<SearchState>): URLSearchParams {
  const p = new URLSearchParams();
  if (s.category) p.set("cat", s.category);
  if (s.subs?.length) p.set("subs", s.subs.join(","));
  if (s.location) p.set("loc", s.location);
  if (s.dates?.from) p.set("from", s.dates.from.toISOString().slice(0, 10));
  if (s.dates?.to) p.set("to", s.dates.to.toISOString().slice(0, 10));
  if (s.timeSlots?.length) p.set("slots", s.timeSlots.join(","));
  if (s.sizes?.length) p.set("sizes", s.sizes.join(","));
  if (s.attrs?.length) p.set("attrs", s.attrs.join(","));
  if (s.pets?.length) p.set("pets", String(s.pets.length));
  if (s.duration) p.set("dur", s.duration);
  return p;
}

export function useSearchState(): {
  state: SearchState;
  update: (patch: Partial<SearchState>) => void;
} {
  const [params, setParams] = useSearchParams();

  const state = useMemo<SearchState>(() => {
    const from = params.get("from");
    const to = params.get("to");
    return {
      category: (params.get("cat") as CategorySlug) || "daytime",
      subs: (params.get("subs")?.split(",").filter(Boolean) as SubServiceSlug[]) || [],
      location: params.get("loc") || "",
      dates: from
        ? { from: new Date(from), to: to ? new Date(to) : undefined }
        : undefined,
      pets: Array.from({ length: Number(params.get("pets") || 0) }).map((_, i) => ({
        id: `pet-${i}`,
        type: "dog",
        size: "medium",
        breed: "",
        ageYears: 3,
        specialNeeds: "",
      })),
      timeSlots: params.get("slots")?.split(",").filter(Boolean) || [],
      sizes: (params.get("sizes")?.split(",").filter(Boolean) as PetSize[]) || [],
      attrs: params.get("attrs")?.split(",").filter(Boolean).filter((a) => KNOWN_ATTRS.includes(a)) || [],
      duration: params.get("dur") || undefined,
    };
  }, [params]);

  const update = useCallback(
    (patch: Partial<SearchState>) => {
      const next = { ...state, ...patch };
      setParams(encodeSearchToParams(next));
    },
    [state, setParams],
  );

  return { state, update };
}

export function useGoToSearch() {
  const navigate = useNavigate();
  return useCallback(
    (s: Partial<SearchState>) => {
      navigate({ pathname: "/search", search: `?${encodeSearchToParams(s).toString()}` });
    },
    [navigate],
  );
}
