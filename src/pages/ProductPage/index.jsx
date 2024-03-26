import { Suspense, lazy } from "react";

const LazyProductPage = lazy(() => import("./ProductPage"));

export default function () {
  return (
    <Suspense>
      <LazyProductPage />
    </Suspense>
  );
}
