import { User } from "iconsax-react";
import { Flex, Button } from "antd";
import { Link } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";

function AdminMain() {
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
        <Flex gap="large">
          <Flex gap="small" vertical>
            <Button size="large">Mağaza</Button>
            <Button size="large">Ümumi</Button>
            <Button size="large">
              <Link to="../products"> Məhsul siyahısı</Link>
            </Button>
            <Button size="large">Mağaza əlavə et</Button>
          </Flex>
          <Flex gap="small" vertical>
            <Button size="large">Yeni məhsul əlavə et</Button>
            <Button size="large">Məhsulu redaktə et</Button>
            <Button size="large">Yeni sual əlavə et</Button>
            <Button size="large">Sual redaktə et</Button>
          </Flex>
        </Flex>
      </div>
    </Flex>
  );
}

export default AdminMain;
