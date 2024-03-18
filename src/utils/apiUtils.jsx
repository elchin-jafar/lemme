import axios from "axios";
import endpoints from "../api/endpoints";

const BASE_URL = "https://lemme.azurewebsites.net/";

const api = axios.create({
  baseURL: BASE_URL,
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

export const editProduct = (productData) => {
  return api.post(endpoints.product.edit, productData);
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
  return api.get(endpoints.product.byName, {
    params: { productName: name },
  });
};

//USER APIs
export const login = (userData) => {
  return api.post(endpoints.user.login, userData);
};

export const register = (userData) => {
  return api.post(endpoints.user.register, userData);
};

//SKIN TYPE APIs
export const determineSkinType = (counts) => {
  return api.get(endpoints.skinType.determine(counts));
};

export const checkSuit = (id, skinType) => {
  return api.get(endpoints.skinType.checkSuit(id, skinType));
};
