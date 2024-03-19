import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload } from "antd";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

function ImgUpload({ getData, initialList }) {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);

  console.log("filelist in upload component", fileList);
  console.log("initialList".initialList);
  // console.log(
  //   "initial in upload component",
  //   initialList.map((img) => `data:image/png;base64,${previewImage}`)
  // );
  // let base64Initial;
  // if (initialList) {
  //   console.log("initial", initialList);
  //   base64Initial = initialList.at(0).images.map((el) => ({
  //     fileBase64: `data:image/png;base64,${el.fileBase64}`,
  //     ...el,
  //   }));
  //   console.log("base64Initial", base64Initial);
  // }

  // console.log("imgUpload", fileList);

  // const defaultImages = initialList.at(0).images.map((el, index) => ({
  //   uid: index,
  //   name: index,
  //   status: "done",
  //   url: `data:image/jpeg;base64,${el}`,
  // }));

  const defaultImages = [
    {
      uid: "1",
      name: "coolImage",
      status: "done",
      url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2Fcool-pictures&psig=AOvVaw1cfIJZ9ntQVdMSNwNhkVGr&ust=1710959853723000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDK86P8gIUDFQAAAAAdAAAAABAE",
    },
  ];

  console.log("defaultImages", defaultImages);

  console.log("preview", previewImage);

  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      console.log("file.originFileObj", file.originFileObj);
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    // getData(fileList);
  };
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );
  return (
    <>
      <Upload
        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        defaultFileList={defaultImages}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img
          alt="example"
          style={{
            width: "100%",
          }}
          src={previewImage}
        />
      </Modal>
    </>
  );
}

export default ImgUpload;
