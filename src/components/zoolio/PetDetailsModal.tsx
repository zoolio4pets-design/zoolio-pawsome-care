import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export type PetType = "dog" | "cat" | "aquatic" | "reptile" | "exotic" | "small-animal" | "bird";
export type PetSize = "small" | "medium" | "large" | "giant";

export interface Pet {
  id: string;
  type: PetType;
  size: PetSize;
  breed: string;
  ageYears: number;
  specialNeeds: string;
}

export const PET_TYPE_LABELS: Record<PetType, string> = {
  dog: "Dog",
  cat: "Cat",
  aquatic: "Aquatic (fish, etc.)",
  reptile: "Reptile",
  exotic: "Exotic",
  "small-animal": "Small animal (rabbit, hamster…)",
  bird: "Bird",
};

const SIZE_LABELS: Record<PetSize, string> = {
  small: "Small (0–7kg)",
  medium: "Medium (7–18kg)",
  large: "Large (18–40kg)",
  giant: "Giant (40kg+)",
};

const blankPet = (): Pet => ({
  id: crypto.randomUUID(),
  type: "dog",
  size: "medium",
  breed: "",
  ageYears: 3,
  specialNeeds: "",
});

interface PetDetailsModalProps {
  pets: Pet[];
  onChange: (pets: Pet[]) => void;
  trigger: React.ReactNode;
}

export const PetDetailsModal = ({ pets, onChange, trigger }: PetDetailsModalProps) => {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<Pet[]>(pets.length ? pets : [blankPet()]);
  const [medsConsent, setMedsConsent] = useState(false);

  const updatePet = (id: string, patch: Partial<Pet>) =>
    setDraft((d) => d.map((p) => (p.id === id ? { ...p, ...patch } : p)));

  const removePet = (id: string) => setDraft((d) => (d.length === 1 ? d : d.filter((p) => p.id !== id)));

  const handleSave = () => {
    onChange(draft);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-xl rounded-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Tell us about your pets</DialogTitle>
          <DialogDescription>
            We'll match you with sitters experienced with your specific pets.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-5">
          {draft.map((pet, i) => (
            <div key={pet.id} className="rounded-xl border border-border p-4 space-y-3 bg-secondary/30">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold">Pet {i + 1}</div>
                {draft.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removePet(pet.id)}
                    className="text-muted-foreground hover:text-destructive transition-colors"
                    aria-label="Remove pet"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label className="text-xs">Type</Label>
                  <Select value={pet.type} onValueChange={(v) => updatePet(pet.id, { type: v as PetType })}>
                    <SelectTrigger className="mt-1"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {(Object.keys(PET_TYPE_LABELS) as PetType[]).map((t) => (
                        <SelectItem key={t} value={t}>{PET_TYPE_LABELS[t]}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-xs">Size</Label>
                  <Select value={pet.size} onValueChange={(v) => updatePet(pet.id, { size: v as PetSize })}>
                    <SelectTrigger className="mt-1"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {(Object.keys(SIZE_LABELS) as PetSize[]).map((s) => (
                        <SelectItem key={s} value={s}>{SIZE_LABELS[s]}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-xs">Breed</Label>
                  <Input
                    value={pet.breed}
                    onChange={(e) => updatePet(pet.id, { breed: e.target.value })}
                    placeholder="e.g. Labrador"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label className="text-xs">Age (years)</Label>
                  <Input
                    type="number"
                    min={0}
                    max={30}
                    value={pet.ageYears}
                    onChange={(e) => updatePet(pet.id, { ageYears: Number(e.target.value) || 0 })}
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label className="text-xs">Special needs (optional)</Label>
                <Input
                  value={pet.specialNeeds}
                  onChange={(e) => updatePet(pet.id, { specialNeeds: e.target.value })}
                  placeholder="e.g. anxious, daily medication, senior"
                  className="mt-1"
                />
              </div>
            </div>
          ))}

          <Button
            type="button"
            variant="outline"
            className="w-full rounded-full"
            onClick={() => setDraft((d) => [...d, blankPet()])}
          >
            <Plus className="h-4 w-4 mr-2" /> Add another pet
          </Button>

          <label className="flex items-start gap-2 text-xs text-muted-foreground">
            <Checkbox checked={medsConsent} onCheckedChange={(v) => setMedsConsent(!!v)} className="mt-0.5" />
            <span>One or more of my pets requires medication or special care.</span>
          </label>
        </div>

        <DialogFooter>
          <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleSave} className="bg-primary">Save pets</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
