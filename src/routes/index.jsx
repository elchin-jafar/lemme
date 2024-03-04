import ProductPage from "../pages/ProductPage";
import HomePage from "../pages/HomePage/HomePage";

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
    element: <>test</>,
  },
];

export default routes;
