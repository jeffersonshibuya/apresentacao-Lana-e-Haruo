import { create } from "zustand";

type LanaState = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useLana = create<LanaState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
