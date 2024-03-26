import { Suspense, lazy } from "react";

const LazyAddStore = lazy(() => import("./AddStore"));

export default function () {
  return (
    <Suspense>
      <LazyAddStore />
    </Suspense>
  );
}
