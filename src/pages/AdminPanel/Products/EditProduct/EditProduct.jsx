import { Flex, Button, Form, Input, Select, message, Spin } from "antd";
const { Option } = Select;
import { User } from "iconsax-react";
import ImgUpload from "../../../../components/ImgUpload/ImgUpload";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useAdminProductsStore } from "../../../../store/adminProductsStore";
import { useEffect, useState } from "react";
import { editProduct } from "../../../../utils/apiUtils";
import { base64ToFile } from "../../../../utils/Base64toFileConverter";

function EditProduct() {
  const [isLoading, setIsLoading] = useState(false);
  const { productList, setList } = useAdminProductsStore();
  const [imagesState, setImagesState] = useState([]);
  const [form] = Form.useForm();
  const { id } = useParams();
  const navigate = useNavigate();
  const initial = productList.filter((prod) => prod.id == id);
  const obj = initial.at(0);
  const newObj = {
    ...obj,
    images: obj.images.map((file, index) => ({
      uid: index,
      name: `img${index}.png`,
      status: "done",
      url: `data:image/jpeg;base64,${file}`,
    })),
  };

  useEffect(() => {
    setImagesState(newObj.images);
  }, []);

  const onFinish = async (values) => {
    const { images, ...otherFormData } = values;

    const nonFiles = images.filter(
      (file) => !Object.prototype.hasOwnProperty.call(file, "originFileObj")
    );

    const convertedFiles = nonFiles.map((image) =>
      base64ToFile(image.url.split(",")[1], image.name, "image/jpeg")
    );

    const updatedImages = [
      ...convertedFiles,
      ...images.slice(nonFiles.length).map((img) => img.originFileObj),
    ];

    const updatedValues = { ...otherFormData, Images: updatedImages };
    try {
      setIsLoading(true);
      await editProduct(
        id,
        updatedValues.name,
        updatedValues.overview,
        updatedValues.howToUse,
        updatedValues.ingredients,
        updatedValues.skinType,
        updatedValues.Images
      );
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

  function handleChange({ fileList }) {
    setImagesState(fileList);
  }

  return (
    <>
      <Flex justify="start" align="start" gap="large">
        <User size="32" color="#85B6FF" />

        <Form
          className="w-full"
          form={form}
          initialValues={newObj}
          onFinish={onFinish}
          labelCol={{ span: 2 }}
          wrapperCol={{ span: 10 }}
        >
          <Flex align="center" gap="small">
            <p className="text-[3.8rem] font-semibold mr-[2rem]">
              Məhsulu redaktə et
            </p>
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
            getValueFromEvent={(e) => {
              if (Array.isArray(e)) {
                return e;
              }
              return e && e.fileList;
            }}
            rules={[{ required: true, message: "Please upload images!" }]}
          >
            <ImgUpload fileList={imagesState} onChange={handleChange} />
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
    </>
  );
}

export default EditProduct;
