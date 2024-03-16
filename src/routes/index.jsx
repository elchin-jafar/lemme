import ProductPage from "../pages/ProductPage/ProductPage";
import HomePage from "../pages/HomePage/HomePage";
import TestPage from "../pages/TestPage/TestPage";
import AdminLayout from "../layouts/AdminLayout";
import AdminMain from "../pages/AdminPanel/AdminMain";
import AdminProducts from "../pages/AdminPanel/AdminProducts";
import AdminAddProduct from "../pages/AdminPanel/AdminAddProduct";
import AdminEditProduct from "../pages/AdminPanel/AdminEditProduct";
import Login from "../pages/Login/Login";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "productPage/:id",
    element: <ProductPage />,
  },
  {
    path: "test",
    element: <TestPage />,
  },
  {
    path: "admin",
    element: <AdminLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "main",
        element: <AdminMain />,
      },
      {
        path: "products",
        element: <AdminProducts />,
      },
      {
        path: "addProduct",
        element: <AdminAddProduct />,
      },
      {
        path: "editProduct/:id",
        element: <AdminEditProduct />,
      },
    ],
  },
];

export default routes;
