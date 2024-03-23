import { Flex, Button, Form, Input, message, Typography, Spin } from "antd";
import { User } from "iconsax-react";
import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { editStore } from "../../../utils/apiUtils";
import { useStoreList } from "../../../store/storeList";

function EditStore() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const { storeList } = useStoreList((state) => state);
  const navigate = useNavigate();

  async function onFinish(values) {
    const valuesWithID = { ...values, id: id };
    try {
      setIsLoading(true);
      const response = await editStore(valuesWithID);
      if (response.status == 200) {
        message.success("Mağaza uğurla redaktə olundu");
        navigate("/admin/stores");
      }
    } catch (error) {
      console.log(error);
      message.error("Failed to submit form");
    } finally {
      setIsLoading(false);
    }
  }
  const currentStore = storeList.filter((store) => store.id == id);
  return (
    <Flex justify="start" align="start" gap="large">
      <User size="32" color="#85B6FF" />
      <Form
        className="w-full"
        onFinish={onFinish}
        initialValues={currentStore.at(0)}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 10 }}
      >
        <Flex align="center" gap="small">
          <Typography className="text-[3.8rem] font-semibold mr-[2rem]">
            Mağazanı redaktə et
          </Typography>
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

export default EditStore;
