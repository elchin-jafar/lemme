import { Suspense, lazy } from "react";

const LazyLogin = lazy(() => import("./Login"));

export default function () {
  return (
    <Suspense>
      <LazyLogin />
    </Suspense>
  );
}
