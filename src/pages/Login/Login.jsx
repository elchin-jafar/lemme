import { User } from "iconsax-react";
import { Flex, Input, Button } from "antd";
import { Link } from "react-router-dom";

function Login() {
  return (
    <Flex justify="start" align="start" gap="large">
      <div>
        <User size="32" color="#85B6FF" />
      </div>
      <div>
        <Flex align="center" gap="large">
          <p className="text-[3.8rem] font-semibold">Daxil ol</p>
          <Link to="/admin/register">
            <Button>Register</Button>
          </Link>
        </Flex>
        <label htmlFor="user" className="text-[3rem] font-semibold">
          Username
        </label>
        <Input
          size="large"
          placeholder="Username"
          id="user"
          className="mb-[2rem]"
        />

        <label htmlFor="pass" className="text-[3rem] font-semibold">
          Şifrə
        </label>
        <Input
          size="large"
          placeholder="password"
          id="pass"
          className="mb-[3.5rem]"
        />
        <Button type="primary" size="large" className="mr-[2rem]">
          Daxil ol
        </Button>
        <Button size="large">
          {" "}
          <Link to="/">Geriyə</Link>
        </Button>
      </div>
    </Flex>
  );
}

export default Login;
