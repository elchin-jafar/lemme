import { User } from "iconsax-react";
import { Flex, Button } from "antd";
import { Link } from "react-router-dom";
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
        <Flex gap="large">
          <Flex gap="small" vertical>
            <Link>
              <Button className="w-[21rem]" size="large">
                Mağaza
              </Button>
            </Link>
            <Button size="large">Ümumi</Button>
            <Link to="../products">
              <Button className="w-[21rem]" size="large">
                Məhsul siyahısı
              </Button>
            </Link>
            <Link to="../addStore">
              <Button className="w-[21rem]" size="large">
                Mağaza əlavə et
              </Button>
            </Link>
          </Flex>
          <Flex gap="small" vertical>
            <Button size="large">Yeni məhsul əlavə et</Button>
            <Link to="../stores">
              <Button className="w-[21rem]" size="large">
                Mağaza siyahısı
              </Button>
            </Link>
            <Button size="large">Yeni sual əlavə et</Button>
            <Button size="large">Sual redaktə et</Button>
          </Flex>
        </Flex>
      </div>
    </Flex>
  );
}

export default MainMenu;
