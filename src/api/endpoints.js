const endpoints = {
  product: {
    add: "/api/Product/AddProduct",
    edit: "/api/Product/EditProduct",
    delete: (id) => `/api/Product/DeleteProduct/${id}`,
    getAll: "/api/Product/GetAllProducts",
    byId: (id) => `/api/Product/GetProductById/${id}`,
    byName: "/api/Product/SearchProductByName",
  },
};

export default endpoints;
