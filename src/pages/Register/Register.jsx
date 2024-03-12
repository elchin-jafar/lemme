import { User } from "iconsax-react";
import { Flex } from "antd";
import { Link } from "react-router-dom";
import { useState } from "react";
import { register } from "../../utils/apiUtils";

function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("admin");
  const resetValues = () => {
    setFirstName("");
    setEmail("");
    setPassword("");
    setLastName("");
    setUsername("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const values = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      userName: username,
      roles: [
        {
          name: role,
        },
      ],
    };

    register(values)
      .then((res) => {
        res.status === 200 && alert("user succesfully created");
      })
      .catch((err) => console.log(err));
    resetValues();
  };
  return (
    <Flex justify="start" align="start" gap="large">
      <div>
        <User size="32" color="#85B6FF" />
      </div>
      <form className="flex flex-col gap-4 w-[50%]" onSubmit={handleSubmit}>
        <p className="text-[3.8rem] font-semibold">Daxil ol</p>

        <label htmlFor="lName" className="text-[3rem] font-semibold">
          Last name
        </label>
        <input
          defaultValue={lastName}
          onChange={(e) => setLastName(e.target.value)}
          size="large"
          placeholder="last name"
          id="lName"
          className="w-[472px] border-[1px] text-center p-[10px] text-3xl outline-none border-[#727171]"
        />
        <label htmlFor="fname" className="text-[3rem] font-semibold">
          first name
        </label>
        <input
          defaultValue={firstName}
          size="large"
          placeholder="first name"
          onChange={(e) => setFirstName(e.target.value)}
          id="fname"
          className="w-[472px] border-[1px] text-center p-[10px] text-3xl outline-none border-[#727171]"
        />
        <label htmlFor="email" className="text-[3rem] font-semibold">
          email
        </label>
        <input
          defaultValue={email}
          size="large"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          type="email"
          className="w-[472px] border-[1px] text-center p-[10px] text-3xl outline-none border-[#727171]"
        />
        <label htmlFor="user" className="text-[3rem] font-semibold">
          Username
        </label>
        <input
          defaultValue={username}
          onChange={(e) => setUsername(e.target.value)}
          size="large"
          placeholder="Username"
          id="user"
          className="w-[472px] border-[1px] text-center p-[10px] text-3xl outline-none border-[#727171]"
        />

        <label htmlFor="pass" className="text-[3rem] font-semibold">
          Şifrə
        </label>
        <input
          defaultValue={password}
          size="large"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          id="pass"
          type="password"
          className="w-[472px] border-[1px] text-center p-[10px] text-3xl outline-none border-[#727171]"
        />
        <div className="flex gap-4">
          <button
            type="submit"
            size="large"
            className="  border-[1px] text-center py-[4px] px-[15px] text-3xl outline-none border-[#727171]"
          >
            Qeydiyatdan keç
          </button>
          <button className="  border-[1px] text-center py-[4px] px-[15px] text-3xl outline-none border-[#727171]">
            {" "}
            <Link to="/">Geriyə</Link>
          </button>
        </div>
      </form>
    </Flex>
  );
}

export default Register;
