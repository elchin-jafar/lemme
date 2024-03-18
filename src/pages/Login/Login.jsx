import { User } from "iconsax-react";
import { Flex, Input, Button, Form } from "antd";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="max-w-[40%]">
      <User size="32" color="#85B6FF" />

      <Flex align="center" gap="large">
        <p className="text-[3.8rem] font-semibold">Daxil ol</p>
        <Link to="/admin/register">
          <Button size="large">Register</Button>
        </Link>
      </Flex>
      <Form>
        <Form.Item label="Username" name="username">
          <Input size="large" />
        </Form.Item>

        <Form.Item label="Şifrə" name="pass">
          <Input size="large" />
        </Form.Item>
        <Form.Item className="text-end">
          <Button type="primary" size="large" className="mr-[2rem]">
            Daxil ol
          </Button>
          <Link to="/">
            <Button type="primary" size="large" danger>
              Geriyə
            </Button>
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
