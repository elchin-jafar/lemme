import { Outlet } from "react-router-dom";
import logo from "../assets/logo2.png";

function AdminLayout() {
  return (
    <div className="relative w-screen h-screen px-[12rem] py-[9rem]">
      <img src={logo} alt="" className="absolute right-[9rem] w-[18rem]" />
      <Outlet />
    </div>
  );
}

export default AdminLayout;
