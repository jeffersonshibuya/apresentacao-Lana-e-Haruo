import { create } from "zustand";

type HaruoState = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useHaruo = create<HaruoState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
