import { Suspense, lazy } from "react";
import { redirect } from "react-router-dom";

const LazyAdminLayout = lazy(() => import("./AdminLayout"));

export default function () {
  return (
    <Suspense>
      <LazyAdminLayout />
    </Suspense>
  );
}

export const adminLayoutLoader = () => {
  const cookies = document.cookie.split(";");
  let token;

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith("login=")) {
      token = cookie.split("=").at(1);
      break;
    }
  }

  if (!token) {
    return redirect("/");
  }
  return null;
};
