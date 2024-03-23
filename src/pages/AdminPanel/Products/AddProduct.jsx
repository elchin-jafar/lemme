import { useState, useEffect } from "react";
import { Flex, Button, Form, Input, Select, Spin, message } from "antd";
const { Option } = Select;
import { User } from "iconsax-react";
import ImgUpload from "../../../components/ImgUpload/ImgUpload";
import { Link, useNavigate } from "react-router-dom";
import { addProduct, getAllStores } from "../../../utils/apiUtils";

function AddProduct() {
  const [isLoading, setIsLoading] = useState(false);
  const [stores, setStores] = useState([]);
  const [imagesState, setImagesState] = useState([]);
  const navigate = useNavigate();
  const [form] = Form.useForm();

  useEffect(() => {
    async function getStores() {
      const stores = await getAllStores();
      setStores(stores.data);
    }

    getStores();
  }, []);

  const onFinish = async (values) => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("overview", values.overview);
      formData.append("howToUse", values.howToUse);
      formData.append("ingredients", values.ingredients);
      formData.append("skinType", values.skinType);
      formData.append("storeIds", values.storeIds);
      values.images.forEach((file) => {
        formData.append("images", file.originFileObj);
      });
      const response = await addProduct(formData);
      message.success("Form submitted successfully");
      form.resetFields();
      navigate(-1);
    } catch (error) {
      console.error("Error submitting form:", error);
      message.error("Failed to submit form");
    } finally {
      setIsLoading(false);
    }
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const beforeUpload = (file) => {
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      message.error("You can only upload image files!");
    }
    return isImage;
  };

  function handleChange({ fileList }) {
    console.log(
      "handle change",
      fileList.map((file) => file.originFileObj)
    );
    setImagesState(fileList.map((file) => file.originFileObj));
  }

  return (
    <Flex justify="start" align="start" gap="large">
      <User size="32" color="#85B6FF" />

      <Form
        className="w-full"
        form={form}
        onFinish={onFinish}
        initialValues={{ images: [], storeIds: [] }}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
      >
        <Flex align="center" gap="small">
          <p className="text-[3.8rem] font-semibold mr-[2rem]">
            Məhsul əlavə et
          </p>
        </Flex>

        <Form.Item
          label="Məhsulun adı"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Ümumi baxış"
          name="overview"
          rules={[{ required: true, message: "Please input overview!" }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          label="İstifadə qaydası"
          name="howToUse"
          rules={[{ required: true, message: "Please input how to use!" }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          label="İnqredientlər"
          name="ingredients"
          rules={[{ required: true, message: "Please input ingredients!" }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          label="Dəri tipi"
          name="skinType"
          rules={[{ required: true, message: "Please select skin type!" }]}
        >
          <Select placeholder="Select skin type">
            <Option value="quru">Quru</Option>
            <Option value="yağlı">Yağlı</Option>
            <Option value="qarışıq">Qarışıq</Option>
            <Option value="bütün">Bütün</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Məhsulun şəkilləri"
          name="images"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          rules={[{ required: true, message: "Please upload images!" }]}
        >
          <ImgUpload
            beforeUpload={beforeUpload}
            fileList={imagesState}
            onChange={handleChange}
            maxFileSize={10485760} // 10MB
          />
        </Form.Item>
        <Form.Item
          label="Mağaza ID-si"
          name="storeIds"
          rules={[{ required: true, message: "Please select store IDs!" }]}
        >
          <Select placeholder="Select store IDs">
            {stores?.map((store) => (
              <Option
                value={store.id}
              >{`${store.name} (${store.adress})`}</Option>
            ))}
          </Select>
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

          <Link to="/admin/products">
            <Button type="primary" danger>
              Ləvğ et
            </Button>
          </Link>
        </Form.Item>
      </Form>
    </Flex>
  );
}

export default AddProduct;
