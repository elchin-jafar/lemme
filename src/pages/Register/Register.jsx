import { User } from "iconsax-react";
import { Flex, Input, Button, Form, Select, message } from "antd";
import { Link } from "react-router-dom";
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

  useEffect(() => {
    async function getUsrs() {
      try {
        const response = await getAllUsers();
        if (response.status == 200) {
          console.log("all users", response.data);
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    getUsrs();
  }, []);

  console.log("roles on reguster", roles);

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  function utilstringConverter(arr) {
    return arr.map((role) => {
      return {
        name: role.toLowerCase(),
      };
    });
  }

  async function handleRegister(values) {
    console.log("register data", values);
    const newObj = { ...values, roles: utilstringConverter(values.roles) };
    const serializedObj = JSON.stringify(newObj);
    console.log("newObj", serializedObj);
    try {
      // const registerData = new FormData();
      // registerData.append("firstName", values.firstName);
      // registerData.append("lastName", values.lastName);
      // registerData.append("email", values.email);
      // registerData.append("password", values.password);
      // registerData.append("userName", values.username);
      // const rolesObj = values.roles.map((role) => {
      //   return { name: role };
      // });
      // registerData.append("roles", rolesObj);
      // console.log("rooes", registerData.getAll("roles"));
      // const response = await register(values);
      // console.log(response);
      const response = await register(serializedObj);
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
          <Form.Item label="Username" name="userName">
            <Input size="large" />
          </Form.Item>
          <Form.Item label="Roles" name="roles">
            {/* <Select
              size="large"
              mode="multiple"
              style={{
                width: "100%",
              }}
              placeholder="select roles"
              onChange={handleChange}
              optionLabelProp="label"
              options={roles}
            /> */}
            <Select placeholder="Select store IDs" mode="multiple">
              {roles?.map((role) => (
                <Option value={role.name}>{`${role.name}`}</Option>
              ))}
            </Select>
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
