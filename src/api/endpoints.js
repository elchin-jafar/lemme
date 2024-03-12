const endpoints = {
  product: {
    add: "/api/Product/AddProduct",
    edit: "/api/Product/EditProduct",
    delete: (id) => `/api/Product/DeleteProduct/${id}`,
    getAll: "/api/Product/GetAllProducts",
    byId: (id) => `/api/Product/GetProductById/${id}`,
    byName: "/api/Product/SearchProductByName",
  },
  user: {
    register: "/api/User/RegisterUser",
    getAll: "/api/User/GetAllUsers",
    byId: "/api/User/GetUserById",
    login: "/api/User/Login",
  },
  skinType: {
    determine: (counts) => `api/SkinType/DetermineSkinType/${counts}`,
    checkSuit: (id, skinType) =>
      `api/SkinType/CheckIfSuitsSkinType/${id}/${skinType}`,
  },
};

export default endpoints;
