import { Suspense, lazy } from "react";

const LazyAdminLayout = lazy(() => import("./AdminLayout"));

export default function () {
  return (
    <Suspense>
      <LazyAdminLayout />
    </Suspense>
  );
}
