import { useState } from "react";
import { Flex, Button, Form, Input, Select, Spin, message, Upload } from "antd";
const { Option } = Select;
import { User } from "iconsax-react";
import ImgUpload from "../../components/ImgUpload/ImgUpload";
// import Upload from "../../components/Upload/Upload";
import { Link, useNavigate } from "react-router-dom";
import { addProduct } from "../../utils/apiUtils";
import { useAdminImagesStore } from "../../store/adminImagesStore";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { UploadOutlined } from "@ant-design/icons";

function AdminAddProduct() {
  const [isLoading, setIsLoading] = useState(false);
  const { imagesState, setImagesState } = useAdminImagesStore((state) => state);
  console.log("imagesState on add", imagesState);
  // const { imagesList, setImages } = useAdminImagesStore((state) => state);
  //   const nameInput = Form.useWatch("name", form);
  const navigate = useNavigate();

  // const [images, setImages] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  const [form] = Form.useForm();

  // console.log("images state", images);

  const onFinish = async (values) => {
    console.log("values", values);
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
      console.log("formData", formData.get("images"));
      const response = await addProduct(formData);

      console.log("Form submission successful:", response.data);
      message.success("Form submitted successfully");
      form.resetFields();
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
    console.log("filelist on adding lol", fileList);
    console.log(
      "handle change",
      fileList.map((file) => file.originFileObj)
    );
    setImagesState(fileList.map((file) => file.originFileObj));
    // form.setFieldValue("images", fileList);
  }

  return (
    <Flex justify="start" align="start" gap="large">
      <User size="32" color="#85B6FF" />

      <Form
        className="w-full"
        form={form}
        onFinish={onFinish}
        initialValues={{ images: [], storeIds: [] }}
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 10 }}
      >
        <Flex align="center" gap="small">
          <p className="text-[3.8rem] font-semibold mr-[2rem]">Məhsul</p>
        </Flex>

        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Overview"
          name="overview"
          rules={[{ required: true, message: "Please input overview!" }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          label="How to Use"
          name="howToUse"
          rules={[{ required: true, message: "Please input how to use!" }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          label="Ingredients"
          name="ingredients"
          rules={[{ required: true, message: "Please input ingredients!" }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          label="Skin Type"
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
          label="Images"
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
          label="Store IDs"
          name="storeIds"
          rules={[{ required: true, message: "Please select store IDs!" }]}
        >
          <Select placeholder="Select store IDs">
            <Option value={1}>Store 1</Option>
            <Option value={2}>Store 2</Option>
            <Option value={3}>Store 3</Option>
          </Select>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 2, span: 10 }}>
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

export default AdminAddProduct;
