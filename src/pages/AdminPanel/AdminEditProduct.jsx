import { Flex, Button, Form, Input, Select, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { User } from "iconsax-react";
import ImgUpload from "../../components/ImgUpload/ImgUpload";
import { Link, useParams } from "react-router-dom";
import { useAdminProductsStore } from "../../store/adminProductsStore";
import { useEffect, useState } from "react";
import { useAdminImagesStore } from "../../store/adminImagesStore";
import ImgBase64 from "../../components/ImgBase64/ImgBase64";
// import base64ToFile from "../../utils/Base64toFileConverter";
// import { useAdminImagesStore } from "../../store/adminImagesStore";

const props = {
  action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  onChange({ file, fileList }) {
    if (file.status !== "uploading") {
      console.log(file, fileList);
    }
  },
  defaultFileList: [
    {
      uid: "1",
      name: "xxx.png",
      status: "uploading",
      url: "http://www.baidu.com/xxx.png",
      percent: 33,
    },
    {
      uid: "2",
      name: "yyy.png",
      status: "done",
      url: "http://www.baidu.com/yyy.png",
    },
    {
      uid: "3",
      name: "zzz.png",
      status: "error",
      response: "Server Error 500",
      // custom error message to show
      url: "http://www.baidu.com/zzz.png",
    },
  ],
};

function AdminEditProduct() {
  const [isLoading, setIsLoading] = useState(false);
  const [putImages, setPutImages] = useState([]);
  const { productList, setList } = useAdminProductsStore();
  const [fileState, setFileState] = useState(null);

  const { id } = useParams();
  const initial = productList.filter((prod) => prod.id == id);

  useEffect(() => {
    function base64ToBlob(base64String, contentType) {
      var byteCharacters = atob(base64String);
      var byteNumbers = new Array(byteCharacters.length);
      for (var i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      var byteArray = new Uint8Array(byteNumbers);
      // var blob = new Blob([byteArray], { type: contentType });
      const newURL = URL.createObjectURL(
        new Blob([byteArray], { type: "text/plain" })
      );
      console.log("url", newURL);
      return newURL;
    }

    function base64ToFile(base64String, fileName, contentType) {
      var blob = base64ToBlob(base64String, contentType);
      var file = new File([blob], fileName, { type: contentType });
      return file;
    }

    console.log("initial", initial);
    // setPutImages(initial.at(0).images);
    console.log("check effect", initial.at(0).images.at(0));
    const fileName = "example.jpg"; // Provide the desired file name
    const contentType = "image/jpeg"; // Specify the content type of the image
    const convertedFile = base64ToFile(
      initial.at(0).images.at(0),
      fileName,
      contentType
    );
    // setFileState(convertedFile);
    console.log("convertedFile", convertedFile);
    const finalForm = new Array(convertedFile);
    console.log("final from", finalForm);
    setPutImages(finalForm);
    console.log("niggest file", putImages);
  }, [initial.at(0).images]);

  // const { imagesList } = useAdminImagesStore((state) => state);
  // console.log("zustand images on edit", imagesList);
  console.log("id", id);
  console.log("zustand prod list", productList);
  console.log(
    "zuu",
    productList.map((el) => el.id == id)
  );
  // const initial = productList.filter((prod) => prod.id == id);
  // console.log("initial", initial);
  // useEffect(() => {
  //   setPutImages(initial.at(0).images);
  //   console.log("putImages", putImages);
  // }, [initial]);
  console.log("img itself", putImages.at(0));

  function handlePreview(file) {}

  return (
    <>
      {/* <Flex justify="start" align="start" gap="large">
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

          <Form initialValues={initial.at(0)}>
            <Form.Item label="Məhsul adı:" name="name">
              <Input size="large" />
            </Form.Item>
            <Form.Item label="Əsaslandırıcı:" name="overview">
              <Input size="large" />
            </Form.Item>
            <Form.Item label="Dəri növü:" name="skinType">
              <Select
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
            <Form.Item
              label="Məhsulun şəkilləri:"
              name="images"
              // initialValue={initial.at(0)?.images?.fileBase64}
            >
              <ImgUpload initialList={initial} />
            </Form.Item>
          </Form>
        </div>
      </Flex> */}
      {/* {putImages?.at(0) && <ImgBase64 data={putImages?.at(0)} />} */}

      <Flex justify="start" align="start" gap="large">
        <User size="32" color="#85B6FF" />

        <Form
          className="w-full"
          // initialValues={initial.at(0)}
          // form={form}
          // onFinish={onFinish}
          // initialValues={{ images: [], storeIds: [] }}
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
            // getValueFromEvent={normFile}
            rules={[{ required: true, message: "Please upload images!" }]}
          >
            {/* <ImgUpload
              // beforeUpload={beforeUpload}
              fileList={putImages}
              // defaultFileList={putImages}
              // onChange={handleChange}
              maxFileSize={10485760} // 10MB
              handlePreview={handlePreview}
            /> */}
            <Upload {...props}>
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          </Form.Item>
          {/* <Form.Item
            label="Store IDs"
            name="storeIds"
            rules={[{ required: true, message: "Please select store IDs!" }]}
          >
            <Select placeholder="Select store IDs">
              <Option value={1}>Store 1</Option>
              <Option value={2}>Store 2</Option>
              <Option value={3}>Store 3</Option>
            </Select>
          </Form.Item> */}
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

export default AdminEditProduct;
