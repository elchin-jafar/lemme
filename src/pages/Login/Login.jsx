import { User } from "iconsax-react";
import { Flex, Input, Button, Form, Spin, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../utils/apiUtils";
import { useCookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";

function Login() {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function onFinish(values) {
    try {
      setIsLoading(true);
      const response = await login(values);
      const token = response.data.securityToken;
      const decoded = jwtDecode(token);
      setCookie("login", token, {
        path: "/",
        expires: new Date(decoded.exp * 1000),
      });
      navigate("/admin/main");
    } catch (error) {
      console.log(error);
      message.error(error.response.data);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-[70%] md:max-w-[70%] w-[40%]">
        <User size="32" color="#85B6FF" />

        <p className="text-[3.8rem] font-semibold">Daxil ol</p>

        <Form
          className=""
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="userName"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Flex gap={10} className="justify-start md:justify-end">
              {isLoading ? (
                <Button className="w-[10rem] mr-4" disabled>
                  <Spin className="ml-2" />
                </Button>
              ) : (
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              )}
              <Link to="/">
                <Button type="primary" danger>
                  Geriyə
                </Button>
              </Link>
            </Flex>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;
