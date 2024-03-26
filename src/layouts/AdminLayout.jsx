import { Outlet, useNavigate } from "react-router-dom";
import logo from "../assets/logo2.png";
import { Button, Popconfirm } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { useCookies } from "react-cookie";
import { useCookie } from "../hooks/useCookie";
import { faPersonWalkingDashedLineArrowRight } from "@fortawesome/free-solid-svg-icons";

function AdminLayout() {
  const token = useCookie("login");
  const navigate = useNavigate();

  function confirm() {
    document.cookie = "login=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    navigate("/");
  }

  return (
    <div className="relative px-[4rem] py-[3rem] md:px-[8rem] md:py-[6rem]">
      <img
        src={logo}
        alt=""
        className="hidden xl:block absolute right-[9rem] w-[18rem]"
      />
      {token && (
        <Popconfirm
          title="Logout"
          description="Hesabdan çıxmaq istədiyinizə əminsinizmi?"
          onConfirm={() => confirm()}
          okText="Bəli"
          cancelText="Xeyr"
        >
          <Button icon={<LogoutOutlined />} className="mb-4">
            Logout
          </Button>
        </Popconfirm>
      )}

      <Outlet />
    </div>
  );
}

export default AdminLayout;
