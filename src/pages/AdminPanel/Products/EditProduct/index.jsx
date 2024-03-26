import { Suspense, lazy } from "react";

const LazyEditProduct = lazy(() => import("./EditProduct"));

export default function () {
  return (
    <Suspense>
      <LazyEditProduct />
    </Suspense>
  );
}
