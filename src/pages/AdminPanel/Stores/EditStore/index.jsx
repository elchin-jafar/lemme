import { Suspense, lazy } from "react";

const LazyEditStore = lazy(() => import("./EditStore"));

export default function () {
  return (
    <Suspense>
      <LazyEditStore />
    </Suspense>
  );
}
