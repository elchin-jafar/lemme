// import ProductPage from "../pages/ProductPage/ProductPage";
import ProductPage from "../pages/ProductPage";
import HomePage from "../pages/HomePage/HomePage";
import TestPage from "../pages/TestPage";
import AdminLayout, { adminLayoutLoader } from "../layouts";
//PRODUCTS
import MainMenu from "../pages/AdminPanel/Products/MainMenu";
import Products from "../pages/AdminPanel/Products/Products";
import AddProduct from "../pages/AdminPanel/Products/AddProduct";
import EditProduct from "../pages/AdminPanel/Products/EditProduct";
//STORES
import AddStore from "../pages/AdminPanel/Stores/AddStore";
import EditStore from "../pages/AdminPanel/Stores/EditStore";
import Stores from "../pages/AdminPanel/Stores/Stores";
import Login, { loginLoader } from "../pages/Login";
import Register from "../pages/Register";
//USERS
import Users from "../pages/AdminPanel/Users/Users";
//GENERAL
import General from "../pages/AdminPanel/General";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "login",
    element: <Login />,
    loader: loginLoader,
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
    loader: adminLayoutLoader,
    children: [
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "main",
        element: <MainMenu />,
        // loader: mainMenuLoader,
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
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "general",
        element: <General />,
      },
    ],
  },
];

export default routes;
