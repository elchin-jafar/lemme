import { Suspense, lazy } from "react";

const LazyTestPage = lazy(() => import("./TestPage"));

export default function () {
  return (
    <Suspense>
      <LazyTestPage />
    </Suspense>
  );
}
