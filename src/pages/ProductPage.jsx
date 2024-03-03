import { Outlet } from "react-router";

function ProductPage() {
  return (
    <>
      <h1>Product Page</h1>
      <Outlet />
    </>
  );
}

export default ProductPage;
