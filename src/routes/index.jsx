import ProductPage from "../pages/ProductPage";

const routes = [
  {
    path: "/",
    element: <>Home Page</>,
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
