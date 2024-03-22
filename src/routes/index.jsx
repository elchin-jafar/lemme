import ProductPage from "../pages/ProductPage/ProductPage";
import HomePage from "../pages/HomePage/HomePage";
import TestPage from "../pages/TestPage/TestPage";
import AdminLayout from "../layouts/AdminLayout";
//PRODUCTS
import MainMenu from "../pages/AdminPanel/Products/MainMenu";
import Products from "../pages/AdminPanel/Products/Products";
import AddProduct from "../pages/AdminPanel/Products/AddProduct";
import EditProduct from "../pages/AdminPanel/Products/EditProduct";
//STORES
import AddStore from "../pages/AdminPanel/Stores/AddStore";
import EditStore from "../pages/AdminPanel/Stores/EditStore";
import Stores from "../pages/AdminPanel/Stores/Stores";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";

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
        path: "register",
        element: <Register />,
      },
      {
        path: "main",
        element: <MainMenu />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "addProduct",
        element: <AddProduct />,
      },
      {
        path: "editProduct/:id",
        element: <EditProduct />,
      },
      {
        path: "addStore",
        element: <AddStore />,
      },
      {
        path: "editStore/:id",
        element: <EditStore />,
      },
      {
        path: "stores",
        element: <Stores />,
      },
    ],
  },
];

export default routes;
