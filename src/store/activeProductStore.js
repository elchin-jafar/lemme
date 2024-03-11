import { create } from "zustand";

export const useActiceProductStore = create((set) => ({
  activeProductId: 0,
  setActiveProductId: (data) => set({ activeProductId: data }),
}));
