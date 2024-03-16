import { Flex, Button, Form, Input, Select, Spin, message, Upload } from "antd";
import { User } from "iconsax-react";
import ImgUpload from "../../components/ImgUpload/ImgUpload";
// import Upload from "../../components/Upload/Upload";
import { Link, useNavigate } from "react-router-dom";
import { addProduct } from "../../utils/apiUtils";
import { useState, useId } from "react";
import { useAdminImagesStore } from "../../store/adminImagesStore";
import endpoints from "../../api/endpoints";
import { UploadOutlined } from "@ant-design/icons";

function AdminAddProduct() {
  const [isLoading, setIsLoading] = useState(false);
  const { imagesState, setImagesState } = useAdminImagesStore((state) => state);
  const [form] = Form.useForm();
  // const { imagesList, setImages } = useAdminImagesStore((state) => state);
  //   const nameInput = Form.useWatch("name", form);
  const navigate = useNavigate();
  function getData(data) {
    console.log("same same but different ", data);
    setImagesState(data);
    // setImages({ id: 1, images: data });
    // console.log("img zustand", imagesList);
    console.log("global img state", imagesState);
  }

  console.log(form.getFieldsValue());

  async function onFinish() {
    form.setFieldValue(
      "images",
      imagesState.map(
        (img) =>
          // fileName: img.name,
          // fileBase64: img.thumbUrl.split(",").at(1),
          // `@${img.name};type=image/jpeg`
          img?.originFileObj
      )
      // "salam is new image"
    );
    form.setFieldValue("storeIds", [0]);
    console.log("all", form.getFieldsValue());
    // console.log(imagesState.forEach((img) => console.log(img)));
    // console.log(form.getFieldValue("images"));
    try {
      setIsLoading(true);
      await addProduct(form.getFieldsValue());
      navigate("/admin/products");
    } catch (err) {
      if (err) {
        console.log(err);
        message.error("Please fill all fields");
      }
    } finally {
      setIsLoading(false);
    }
  }
  return <MyForm2 />;
}

export default AdminAddProduct;

import React from "react";
import axios from "axios";

const MyForm = () => {
  const [fileList, setFileList] = useState([]);
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
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

      // values.storeIds.forEach((id) => {
      //   formData.append("storeIds", id);
      // });

      const response = await axios.post(
        `https://lemme.azurewebsites.net/${endpoints.product.add}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Form submission successful:", response.data);
      message.success("Form submitted successfully");
      form.resetFields();
    } catch (error) {
      console.error("Error submitting form:", error);
      message.error("Failed to submit form");
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

  const handleChange = ({ fileList: newFileList }) => {
    setFileList((prev) => ({ ...prev, newFileList }));

    // getData(fileList);
  };

  return (
    <Form
      form={form}
      onFinish={onFinish}
      initialValues={{ images: [], storeIds: [] }}
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 14 }}
    >
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
        <Select>
          <Select.Option value="quru">Quru</Select.Option>
          <Select.Option value="yağlı">Yağlı</Select.Option>
          <Select.Option value="qarışıq">Qarışıq</Select.Option>
          <Select.Option value="bütün">Bütün</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Images"
        name="images"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        rules={[{ required: true, message: "Please upload images!" }]}
      >
        <Upload
          beforeUpload={beforeUpload}
          fileList={fileList}
          // multiple
          // maxCount={3}
          listType="picture-card"
          maxFileSize={10485760} // 10MB
          onChange={handleChange}
        >
          <Button icon={<UploadOutlined />}></Button>
        </Upload>
      </Form.Item>
      <Form.Item
        label="Store IDs"
        name="storeIds"
        rules={[{ required: true, message: "Please select store IDs!" }]}
      >
        <Select mode="multiple">
          <Option value={1}>Store 1</Option>
          <Option value={2}>Store 2</Option>
          <Option value={3}>Store 3</Option>
        </Select>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 6, span: 14 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

const { Option } = Select;

const MyForm2 = () => {
  const [images, setImages] = useState([]);
  const [form] = Form.useForm();

  console.log("images state", images);

  const onFinish = async (values) => {
    console.log("values", values);
    try {
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
      console.log("formData", formData);
      const response = await axios.post(
        `https://lemme.azurewebsites.net/${endpoints.product.add}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Form submission successful:", response.data);
      message.success("Form submitted successfully");
      form.resetFields();
    } catch (error) {
      console.error("Error submitting form:", error);
      message.error("Failed to submit form");
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
    setImages(fileList.map((file) => file.originFileObj));
    // form.setFieldValue("images", fileList);
  }

  return (
    <Form
      form={form}
      onFinish={onFinish}
      initialValues={{ images: [], storeIds: [] }}
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 14 }}
    >
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
        <Upload
          beforeUpload={beforeUpload}
          listType="picture-card"
          fileList={images}
          // maxCount={3}
          maxFileSize={10485760} // 10MB
          onChange={handleChange}
        >
          {/* <Button icon={<UploadOutlined />}>Click to upload</Button> */}
          click
        </Upload>
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
      <Form.Item wrapperCol={{ offset: 6, span: 14 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
