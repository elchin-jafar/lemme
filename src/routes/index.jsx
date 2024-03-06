import ProductPage from "../pages/ProductPage";
import HomePage from "../pages/HomePage/HomePage";
import TestPage from "../pages/TestPage/TestPage";

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
    element: <>Admin Panel</>,
  },
];

export default routes;
