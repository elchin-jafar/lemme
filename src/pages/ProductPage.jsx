import { Outlet } from "react-router";
import Product from "../components/product";

function ProductPage() {
  return (
    <>
      <Product />
      <Outlet />
    </>
  );
}

export default ProductPage;
