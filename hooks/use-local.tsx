import { create } from "zustand";

type NewLocalState = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useLocal = create<NewLocalState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
