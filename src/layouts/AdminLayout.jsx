import { Outlet } from "react-router-dom";
import logo from "../assets/logo2.png";

function AdminLayout() {
  return (
    <div className="relative  px-[8rem] py-[6rem]">
      <img
        src={logo}
        alt=""
        className="hidden xl:block absolute right-[9rem] w-[18rem]"
      />
      <Outlet />
    </div>
  );
}

export default AdminLayout;
