import { Flex, Button, Form, Input, Select } from "antd";
import { User } from "iconsax-react";
import ImgUpload from "../../components/ImgUpload/ImgUpload";
import { Link } from "react-router-dom";
import { addProduct } from "../../utils/apiUtils";

function AdminAddProduct() {
  const [form] = Form.useForm();
  //   const nameInput = Form.useWatch("name", form);

  console.log(form);

  function onFinish() {
    console.log(form.getFieldValue("images"));
  }
  return (
    <Flex justify="start" align="start" gap="large">
      <div>
        <User size="32" color="#85B6FF" />
      </div>
      <div>
        {/* <Flex align="center" gap="small">
          <p className="text-[3.8rem] font-semibold mr-[2rem]">Məhsul</p>
          <Button type="primary">Yadda saxla</Button>
          <Link to="/admin/products">
            <Button type="primary" danger>
              Ləvğ et
            </Button>
          </Link>
        </Flex> */}

        <Form onFinish={onFinish} form={form}>
          <Flex align="center" gap="small">
            <p className="text-[3.8rem] font-semibold mr-[2rem]">Məhsul</p>
            <Button type="primary" htmlType="submit">
              Yadda saxla
            </Button>
            <Link to="/admin/products">
              <Button type="primary" danger>
                Ləvğ et
              </Button>
            </Link>
          </Flex>
          <Form.Item label="Məhsul adı:" name="name">
            <Input size="large" />
          </Form.Item>
          <Form.Item label="Əsaslandırıcı:" name="overview">
            <Input size="large" />
          </Form.Item>
          <Form.Item label="İstifadə qaydası:" name="howToUse">
            <Input size="large" />
          </Form.Item>
          <Form.Item label="İnqredientlər:" name="ingredients">
            <Input size="large" />
          </Form.Item>
          <Form.Item label="Dəri növü:" name="Dəri növü">
            <Select
              //   defaultValue="dry" need to use initialValues of form instead
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
          <Form.Item label="Məhsulun şəkilləri:" name="images">
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

export default AdminAddProduct;
