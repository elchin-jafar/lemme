import { create } from "zustand";

export const useAdminImagesStore = create((set) => ({
  imagesState: [],
  setImagesState: (data) => set({ imagesState: data }),
}));
