import { create } from "zustand";

type MusicsState = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useMusics = create<MusicsState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
