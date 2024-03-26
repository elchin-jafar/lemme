import { Flex, Button, Form, Input, Spin, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { User } from "iconsax-react";
import { addStore } from "../../../../utils/apiUtils";
import { useState } from "react";

function AddStore() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [form] = Form.useForm();

  async function onFinish(values) {
    try {
      setIsLoading(true);
      const response = await addStore(values);
      if (response.status == 200) {
        message.success("Mağaza uğurla əlavə edildi");
        form.resetFields();
        navigate("/admin/stores");
      }
    } catch (error) {
      console.log(error);
      message.error("Əməliyyat uğursuz oldu");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Flex justify="start" align="start" gap="large">
      <User size="32" color="#85B6FF" />

      <Form
        className="w-full"
        form={form}
        onFinish={onFinish}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
      >
        <Flex align="center" gap="small">
          <p className="text-[3.8rem] font-semibold mr-[2rem]">
            Mağaza əlavə et
          </p>
        </Flex>

        <Form.Item
          label="Mağazanın adı"
          name="name"
          rules={[{ required: true, message: "Mağazanın adını qeyd edin!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mağazanın ünvanı"
          name="adress"
          rules={[{ required: true, message: "Mağazanın adresini qeyd edin!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 4, span: 14 }}>
          {isLoading ? (
            <Button className="w-[10rem] mr-4" disabled>
              <Spin className="ml-2" />
            </Button>
          ) : (
            <Button type="primary" htmlType="submit" className="mr-4">
              Yadda saxla
            </Button>
          )}

          <Link to="/admin/stores">
            <Button type="primary" danger>
              Ləvğ et
            </Button>
          </Link>
        </Form.Item>
      </Form>
    </Flex>
  );
}

export default AddStore;
