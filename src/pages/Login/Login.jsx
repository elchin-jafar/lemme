import { User } from "iconsax-react";
import { Flex, Input, Button, Form } from "antd";
import { Link } from "react-router-dom";
import { login } from "../../utils/apiUtils";
import { useCookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";

function Login() {
  const [cookies, setCookie, removeCookie] = useCookies();
  async function onFinish(values) {
    try {
      const response = await login(values);
      console.log(response);
      const token = response.data.securityToken;
      const decoded = jwtDecode(token);
      console.log("decoded", decoded);
      setCookie("login", token, {
        path: "/",
        expires: new Date(decoded.exp * 1000),
      });
    } catch (error) {
      console.log(error);
    }
  }

  function logout() {
    console.log("salam");
    removeCookie("login", { path: "/" });
  }

  return (
    <div className="max-w-[40%]">
      <User size="32" color="#85B6FF" />

      <Flex align="center" gap="large">
        <p className="text-[3.8rem] font-semibold">Daxil ol</p>
        <Link to="/admin/register">
          <Button size="large">Register</Button>
        </Link>
      </Flex>
      <Form onFinish={onFinish}>
        <Form.Item label="Username" name="userName">
          <Input size="large" />
        </Form.Item>

        <Form.Item label="Şifrə" name="password">
          <Input size="large" />
        </Form.Item>
        <Form.Item className="text-end">
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            className="mr-[2rem]"
          >
            Daxil ol
          </Button>
          <Link to="/">
            <Button type="primary" size="large" danger>
              Geriyə
            </Button>
          </Link>
          <Button onClick={logout}>Log out</Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
