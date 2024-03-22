import { create } from "zustand";

export const useStoreList = create((set) => ({
  storeList: [],
  setStoreList: (data) => set({ storeList: data }),
}));
