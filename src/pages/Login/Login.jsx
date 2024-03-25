import { User } from "iconsax-react";
import { Flex, Input, Button, Form, Spin } from "antd";
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
      // const response = await login(values);
      // console.log(response);
      // const token = response.data.securityToken;
      // const decoded = jwtDecode(token);
      // console.log("decoded", decoded);
      // setCookie("login", token, {
      // path: "/",
      // expires: new Date(decoded.exp),
      // });
      navigate("/admin/main");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  function logout() {
    console.log("salam");
    removeCookie("login", { path: "/" });
  }

  return (
    <div className="max-w-[70%] md:max-w-[70%]">
      <User size="32" color="#85B6FF" />

      {/* <Flex align="center" gap="large"> */}
      <p className="text-[3.8rem] font-semibold">Daxil ol</p>
      {/* <Link to="/admin/register">
          <Button size="large">Register</Button>
        </Link> */}
      {/* </Flex> */}

      <Form
        className="max-w-[600px]"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
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
  );
}

export default Login;
