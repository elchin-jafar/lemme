import { Suspense, lazy } from "react";

const LazyRegister = lazy(() => import("./Register"));

export default function () {
  return (
    <Suspense>
      <LazyRegister />
    </Suspense>
  );
}
