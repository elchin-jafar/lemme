import axios from "axios";
import endpoints from "../api/endpoints";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

//PRODUCT APIs
export const addProduct = (productData) => {
  return api.post(endpoints.product.add, productData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const editProduct = (
  id,
  name,
  overview,
  howToUse,
  ingredients,
  skinType,
  images
) => {
  const formData = new FormData();
  images.forEach((image) => {
    formData.append("Images", image);
  });

  return api.put(
    `${endpoints.product.edit}?Id=${id}&Name=${name}&Overview=${overview}&HowToUse=${howToUse}&Ingredients=${ingredients}&SkinType=${skinType}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
};

export const deleteProduct = (id) => {
  return api.delete(endpoints.product.delete(id));
};

export const getAll = () => {
  return api.get(endpoints.product.getAll);
};

export const getProductById = (id) => {
  return api.get(endpoints.product.byId(id));
};

export const getProductByName = (name) => {
  return api.get(endpoints.product.byName(name));
};

//STORE APIs
export const addStore = (storeData) => {
  return api.post(endpoints.store.add, storeData);
};

export const editStore = (storeData) => {
  return api.put(endpoints.store.edit, storeData);
};

export const deleteStore = (id) => {
  return api.delete(endpoints.store.delete(id));
};

export const getAllStores = () => {
  return api.get(endpoints.store.getAll);
};

export const getStoreById = (id) => {
  return api.get(endpoints.store.byId(id));
};

//USER APIs
export const login = (userData) => {
  return api.post(endpoints.user.login, userData);
};

export const register = (userData) => {
  return api.post(endpoints.user.register, userData);
};

export const getAllRoles = () => {
  return api.get(endpoints.user.getAllRoles);
};

export const getAllUsers = () => {
  return api.get(endpoints.user.getAllUsers);
};

//SKIN TYPE APIs
export const determineSkinType = (counts) => {
  return api.get(endpoints.skinType.determine(counts));
};

export const checkSuit = (id, skinType) => {
  return api.get(endpoints.skinType.checkSuit(id, skinType));
};
