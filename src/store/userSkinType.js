import { create } from "zustand";

export const useUserSkinType = create((set) => ({
  skinType: "",
  setSkinType: (data) => set({ skinType: data }),
}));
