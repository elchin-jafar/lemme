const endpoints = {
  product: {
    add: "/api/Product/AddProduct",
    edit: "/api/Product/EditProduct",
    delete: (id) => `/api/Product/DeleteProduct/${id}`,
    getAll: "/api/Product/GetAllProducts",
    byId: (id) => `/api/Product/GetProductById/${id}`,
    byName: (query) => `/api/Product/SearchProductByName/${query}`,
  },
  store: {
    add: "/api/Store/AddStore",
    edit: "/api/Store/EditStore",
    delete: (id) => `/api/Store/DeleteStore/${id}`,
    getAll: "/api/Store/GetAllStores",
    byId: (id) => `/api/Store/GetStoreById/${id}`,
  },
  user: {
    register: "/api/User/RegisterUser",
    getAllUsers: "/api/User/GetAllUsers",
    byId: "/api/User/GetUserById",
    login: "/api/User/Login",
    delete: (id) => `api/User/DeleteUser?id=${id}`,
    getAllRoles: "/api/User/GetAllRoles",
  },
  skinType: {
    determine: (counts) => `api/SkinType/DetermineSkinType/${counts}`,
    checkSuit: (id, skinType) =>
      `api/SkinType/CheckIfSuitsSkinType/${id}/${skinType}`,
  },
};

export default endpoints;
