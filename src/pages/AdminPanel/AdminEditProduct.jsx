import { Flex, Button, Form, Input, Select } from "antd";
import { User } from "iconsax-react";
import ImgUpload from "../../components/ImgUpload/ImgUpload";
import { Link } from "react-router-dom";

function AdminEditProduct() {
  return (
    <Flex justify="start" align="start" gap="large">
      <div>
        <User size="32" color="#85B6FF" />
      </div>
      <div>
        <Flex align="center" gap="small">
          <p className="text-[3.8rem] font-semibold mr-[2rem]">Məhsul</p>
          <Button type="primary">Yadda saxla</Button>
          <Link to="/admin/products">
            <Button type="primary" danger>
              Ləvğ et
            </Button>
          </Link>
        </Flex>

        <Form>
          <Form.Item label="Məhsul adı:" name="Məhsul adı">
            <Input size="large" />
          </Form.Item>
          <Form.Item label="Əsaslandırıcı:" name="Əsaslandırıcı">
            <Input size="large" />
          </Form.Item>
          <Form.Item label="Dəri növü:" name="Dəri növü">
            <Select
              defaultValue="dry"
              style={{
                width: 120,
              }}
              onChange={() => console.log("salam")}
              options={[
                {
                  value: "dry",
                  label: "Quru",
                },
                {
                  value: "oily",
                  label: "Yağlı",
                },
                {
                  value: "mixed",
                  label: "Qarışıq",
                },
              ]}
            />
          </Form.Item>
          <Form.Item label="Məhsulun şəkilləri:" name="Məhsulun şəkilləri">
            <ImgUpload />
          </Form.Item>
          <Form.Item label="İlk baxışda:" name="İlk baxışda">
            <textarea
              className="border border-black"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </Form.Item>
        </Form>
      </div>
    </Flex>
  );
}

export default AdminEditProduct;
