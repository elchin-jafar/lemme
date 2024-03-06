import ProductPage from "../pages/ProductPage";
import HomePage from "../pages/HomePage/HomePage";
import TestPage from "../pages/TestPage/TestPage";
import AdminPanel from "../pages/AdminPanel/AdminPanel";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "productPage/:id",
    element: <ProductPage />,
    children: [
      {
        path: "ingredients",
        element: <>Ingredients</>,
      },
      {
        path: "usage",
        element: <>How To Use</>,
      },
    ],
  },
  {
    path: "test",
    element: <TestPage />,
  },
  {
    path: "admin",
    element: <AdminPanel />,
  },
];

export default routes;
