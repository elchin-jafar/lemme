import { User } from "iconsax-react";
import { Flex, Input, Button, Form, Select, message } from "antd";
import { Link } from "react-router-dom";
import { register } from "../../utils/apiUtils";

const options = [
  {
    label: "Admin",
    value: "Admin",
  },
  {
    label: "User",
    value: "User",
  },
];

function Register() {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  async function handleRegister(values) {
    console.log(values);
    try {
      const response = await register(values);
      console.log(response);
    } catch (err) {
      console.log(err.message);
      message(err.message);
    }
  }

  return (
    <>
      <div className="max-w-[70%]">
        <User size="32" color="#85B6FF" />

        <Flex align="center" gap="large">
          <p className="text-[3.8rem] font-semibold">Register</p>
        </Flex>
        <Form onFinish={handleRegister}>
          <Form.Item label="First Name" name="firstName">
            <Input size="large" />
          </Form.Item>

          <Form.Item label="Last Name" name="lastName">
            <Input size="large" />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input size="large" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input size="large" />
          </Form.Item>
          <Form.Item label="Username" name="username">
            <Input size="large" />
          </Form.Item>
          <Form.Item label="Roles" name="roles">
            <Select
              size="large"
              mode="multiple"
              style={{
                width: "100%",
              }}
              placeholder="select roles"
              onChange={handleChange}
              optionLabelProp="label"
              options={options}
            />
          </Form.Item>
          <Form.Item className="text-end">
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="mr-[2rem]"
            >
              Register
            </Button>
            <Link to="/admin/login">
              <Button type="primary" size="large" danger>
                Geriyə
              </Button>
            </Link>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

export default Register;
