import { create } from "zustand";

type pixState = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const usePix = create<pixState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
