import { User } from "iconsax-react";
import { Flex, Button } from "antd";
import { Link, redirect } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";

function MainMenu() {
  return (
    <Flex justify="start" align="start" gap="large">
      <Flex vertical gap="large">
        <User size="32" color="#85B6FF" />
        <Link to="/">
          <Button icon={<ArrowLeftOutlined />} />
        </Link>
      </Flex>
      <div>
        <p className="text-[3.8rem] font-semibold">Ana səhifə</p>
        <Flex gap="large" className="flex-col md:flex-row">
          <Flex gap="small" vertical>
            <Link to="../general">
              <Button className="w-[21rem]" size="large">
                Ümumi
              </Button>
            </Link>
            <Link to="../users">
              <Button size="large" className="w-[21rem]">
                İstifadəçilər
              </Button>
            </Link>
          </Flex>
          <Flex gap="small" vertical>
            <Link to="../stores">
              <Button className="w-[21rem]" size="large">
                Mağaza siyahısı
              </Button>
            </Link>
            <Link to="../products">
              <Button className="w-[21rem]" size="large">
                Məhsul siyahısı
              </Button>
            </Link>
          </Flex>
        </Flex>
      </div>
    </Flex>
  );
}

export default MainMenu;
