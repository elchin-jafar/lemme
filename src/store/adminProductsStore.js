import { create } from "zustand";

export const useAdminProductsStore = create((set) => ({
  productList: [],
  setList: (data) => set({ productList: data }),
}));
