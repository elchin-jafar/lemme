import { Suspense, lazy } from "react";
import { redirect } from "react-router-dom";

const LazyLogin = lazy(() => import("./Login"));

export default function () {
  return (
    <Suspense>
      <LazyLogin />
    </Suspense>
  );
}

export const loginLoader = () => {
  const cookies = document.cookie.split(";");
  let token;

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith("login=")) {
      token = cookie.split("=").at(1);
      break;
    }
  }

  if (token) {
    return redirect("/admin/main");
  }
  return null;
};
