import { User } from "iconsax-react";
import { Flex, Input, Button, Form, Select, Spin, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { register, getAllRoles, getAllUsers } from "../../utils/apiUtils";
import { useEffect, useState } from "react";

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
  const [roles, setRoles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function getRls() {
      try {
        const response = await getAllRoles();
        if (response.status == 200) {
          setRoles(response.data);
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    getRls();
  }, []);

  function utilstringConverter(arr) {
    return arr.map((role) => {
      return {
        name: role.toLowerCase(),
      };
    });
  }

  async function handleRegister(values) {
    const newObj = { ...values, roles: utilstringConverter(values.roles) };
    const serializedObj = JSON.stringify(newObj);
    try {
      setIsLoading(true);
      const response = await register(serializedObj);
      navigate("/admin/users");
    } catch (err) {
      console.log(err.message);
      message.error(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <div className="max-w-[70%]">
        <User size="32" color="#85B6FF" />

        <Flex align="center" gap="large">
          <p className="text-[3.8rem] font-semibold">Register</p>
        </Flex>
        <Form
          onFinish={handleRegister}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
        >
          <Form.Item
            label="First Name"
            name="firstName"
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
            label="Last Name"
            name="lastName"
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
            label="Email"
            name="email"
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
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>
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
            label="Roles"
            name="roles"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Select placeholder="Select store IDs" mode="multiple">
              {roles?.map((role) => (
                <Option value={role.name}>{`${role.name}`}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item className="text-end">
            {isLoading ? (
              <Button className="w-[10rem] mr-4" disabled>
                <Spin className="ml-2" />
              </Button>
            ) : (
              <Button type="primary" htmlType="submit" className="mr-[2rem]">
                Register
              </Button>
            )}

            <Link to="/admin/users">
              <Button type="primary" danger>
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
