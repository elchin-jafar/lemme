import { Suspense, lazy } from "react";

const LazyAddProduct = lazy(() => import("./AddProduct"));

export default function () {
  return (
    <Suspense>
      <LazyAddProduct />
    </Suspense>
  );
}
