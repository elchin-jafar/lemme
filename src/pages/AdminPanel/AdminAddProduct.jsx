import { Flex, Button, Form, Input, Select, Spin, message } from "antd";
import { User } from "iconsax-react";
import ImgUpload from "../../components/ImgUpload/ImgUpload";
import { Link, useNavigate } from "react-router-dom";
import { addProduct } from "../../utils/apiUtils";
import { useState, useId } from "react";
import { useAdminImagesStore } from "../../store/adminImagesStore";

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
  }

  console.log(form);

  async function onFinish() {
    form.setFieldValue(
      "images",
      imagesState.map((img) => ({
        fileName: img.name,
        fileBase64: img.thumbUrl.split(",").at(1),
      }))
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

        <Form
          onFinish={onFinish}
          form={form}
          // initialValues={{ name: "random" }}
        >
          <Flex align="center" gap="small">
            <p className="text-[3.8rem] font-semibold mr-[2rem]">Məhsul</p>
            {isLoading ? (
              <div className="w-[10rem] h-[3.2ren] text-center">
                <Spin />
              </div>
            ) : (
              <Button type="primary" htmlType="submit">
                Yadda saxla
              </Button>
            )}

            <Link to="/admin/products">
              <Button type="primary" danger>
                Ləvğ et
              </Button>
            </Link>
          </Flex>
          <Form.Item label="Məhsul adı:" name="name">
            <Input size="large" />
          </Form.Item>
          <Form.Item label="İlk baxışda:" name="overview">
            <Input size="large" />
          </Form.Item>
          <Form.Item label="İstifadə qaydası:" name="howToUse">
            <Input size="large" />
          </Form.Item>
          <Form.Item label="İnqredientlər:" name="ingredients">
            <Input size="large" />
          </Form.Item>
          <Form.Item label="Dəri növü:" name="skinType">
            <Select
              //   defaultValue="dry" need to use initialValues of form instead
              style={{
                width: 120,
              }}
              onChange={(value) => console.log(value)}
              options={[
                {
                  value: "quru",
                  label: "Quru",
                },
                {
                  value: "yağlı",
                  label: "Yağlı",
                },
                {
                  value: "qarışıq",
                  label: "Qarışıq",
                },
              ]}
            />
          </Form.Item>
          <Form.Item label="Məhsulun şəkilləri:" name="images">
            <ImgUpload getData={getData} />
          </Form.Item>
          <Form.Item label="Mağaza" name="storeIds">
            <Select
              //   defaultValue="dry" need to use initialValues of form instead
              style={{
                width: 120,
              }}
              onChange={() => console.log("salam")}
              options={[
                {
                  value: "0",
                  label: "magaza 0",
                },
                {
                  value: "1",
                  label: "magaza 1",
                },
                {
                  value: "2",
                  label: "magaza 2",
                },
              ]}
            />
          </Form.Item>
        </Form>
      </div>
    </Flex>
  );
}

export default AdminAddProduct;
