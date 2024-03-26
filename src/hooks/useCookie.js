import { useCookies } from "react-cookie";

export function useCookie(cookieName) {
  const [cookies] = useCookies([cookieName]);
  return cookies[cookieName];
}
