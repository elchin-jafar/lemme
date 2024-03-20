import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload as AntUpload } from "antd";
const props = {
  name: "images",
  action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  headers: {
    authorization: "authorization-text",
  },
  //   onChange(info) {
  //     if (info.file.status !== "uploading") {
  //       console.log("info.file", info.file, "info.fileList", info.fileList);
  //     }
  //     if (info.file.status === "done") {
  //       message.success(`${info.file.name} file uploaded successfully`);
  //     } else if (info.file.status === "error") {
  //       message.error(`${info.file.name} file upload failed.`);
  //     }
  //   },
};
const Upload = ({ getData }) => {
  function onChange(info) {
    if (info.file.status !== "uploading") {
      console.log("info.file", info.file, "info.fileList", info.fileList);
    }
    if (info.file.status === "done") {
      console.log(
        "info.file done",
        info.file,
        "info.fileList done",
        info.fileList
      );
      getData(info.fileList);
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  }
  return (
    <AntUpload onChange={onChange} {...props}>
      <Button icon={<UploadOutlined />}>Click to Upload</Button>
    </AntUpload>
  );
};

export default Upload;
