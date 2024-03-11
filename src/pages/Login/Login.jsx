import { User } from "iconsax-react";
import { Flex, Input, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../../utils/apiUtils";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    const values = {
      userName: userName,
      password: password,
    };
    login(values)
      .then((res) => {
        if (res.status === 200) {
          navigate("/");
        }
      })
      .catch((err) => alert(err));

    console.log(values);
  };

  return (
    <>
      <Flex justify="start" align="start" gap="large">
        <div>
          <User size="32" color="#85B6FF" />
        </div>
        <div>
          <p className="text-[3.8rem] font-semibold">Daxil ol</p>
          <label htmlFor="user" className="text-[3rem] font-semibold">
            Username
          </label>
          <Input
            size="large"
            placeholder="Username"
            id="user"
            className="mb-[2rem]"
            onChange={(e) => setUserName(e.target.value)}
          />

          <label htmlFor="pass" className="text-[3rem] font-semibold">
            Şifrə
          </label>
          <Input
            size="large"
            placeholder="password"
            id="pass"
            className="mb-[3.5rem]"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="primary"
            size="large"
            className="mr-[2rem]"
            onClick={() => handleSubmit()}
          >
            Daxil ol
          </Button>
          <Button size="large">
            {" "}
            <Link to="/">Geriyə</Link>
          </Button>
        </div>
      </Flex>
    </>
  );
}

export default Login;
