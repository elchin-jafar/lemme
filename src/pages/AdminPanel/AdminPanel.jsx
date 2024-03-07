import React, { useState, useEffect } from "react";
import { AutoComplete, Input } from "antd";
import { Button, Modal } from "antd";
// import Link from "antd/es/typography/Link";
import { Popover } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const getRandomInt = (max, min = 0) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const searchResult = (query) =>
  new Array(getRandomInt(5))
    .join(".")
    .split(".")
    .map((_, idx) => {
      const category = `${query}${idx}`;
      return {
        value: category,
        label: (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>{query}</span>
          </div>
        ),
      };
    });
function AdminPanel() {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal with async logic
      </Button>
      <Modal
        title="Dəri tipinizi qeyd edin"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        width={800}
        footer={[
          <div className="pt-8 md:pt-[37px] flex justify-center items-center">
            <Link to="/productPage/1">
              <button
                onClick={() => setOpen(false)}
                className="px-5 py-2.5 bg-[#56A8FF] hover:bg-[#56A8FF] shadow-lg hover:shadow-box rounded-xl text-white transition duration-300 ease-in-out transform hover:scale-105"
              >
                Davam et
              </button>
            </Link>
          </div>,
        ]}
      >
        {/* <div className="relative md:max-w-[840px] w-full md:p-10 h-auto shadow-box bg-white px-5 md:px-[60px] pt-[50px] pb-10 rounded-xl z-10"> */}
        {/* <div className="flex gap-5 justify-between pb-5 md:pb-10 items-center">
          <h1 className="font-bold text-xl md:text-2xl">
            Dəri tipinizi qeyd edin
          </h1>
          <Link
            to="/"
            className=" w-[30px] h-[30px] md:w-[50px] md:h-[50px] bg-[#d9d9d9] hover:bg-white flex justify-center items-center rounded-full shadow-btn hover:shadow-box"
          >
            <FontAwesomeIcon
              className="text-[20px] md:text-[30px] text-[#828282]"
              icon={faTimes}
            />
          </Link>
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10">
          <Link
            to="/productPage/1"
            className="px-2.5 pt-2.5 group w-full h-[205px] bg-[#eee] hover:bg-white rounded-xl shadow-lg hover:shadow-box flex flex-col justify-center items-center transition duration-300 ease-in-out transform hover:scale-105"
          >
            <img
              className="max-w-[140px] w-full max-h-[140px]  object-cover mb-3"
              src="../src/assets/Rectangle 4.svg"
              alt=""
            />
            <p className="font-bold text-lg md:text-xl text-center">Quru</p>
          </Link>
          <Link
            to="/productPage/1"
            className="px-2.5 pt-2.5 group w-full h-[205px] bg-[#eee] hover:bg-white rounded-xl shadow-lg hover:shadow-box flex flex-col justify-center items-center transition duration-300 ease-in-out transform hover:scale-105"
          >
            <img
              className="max-w-[140px] w-full max-h-[140px] object-cover mb-3"
              src="../src/assets/Rectangle 1.svg"
              alt=""
            />
            <p className="font-bold text-lg md:text-xl text-center">Yağlı</p>
          </Link>
          <Link
            to="/productPage/1"
            className="px-2.5 pt-2.5 group w-full h-[205px] bg-[#eee] hover:bg-white rounded-xl shadow-lg hover:shadow-box flex flex-col justify-center items-center transition duration-300 ease-in-out transform hover:scale-105"
          >
            <img
              className="max-w-[140px] w-full max-h-[140px] object-cover mb-3"
              src="../src/assets/Rectangle 3.svg"
              alt=""
            />
            <p className="font-bold text-lg md:text-xl text-center">Qarışıq</p>
          </Link>
          <Link
            to="/productPage/1"
            className="px-2.5 pt-2.5 group w-full h-[205px] bg-[#eee] hover:bg-white rounded-xl shadow-lg hover:shadow-box flex flex-col justify-center items-center transition duration-300 ease-in-out transform hover:scale-105"
          >
            <img
              className="max-w-[140px] w-full max-h-[140px] object-cover mb-3"
              src="../src/assets/Rectangle 2.svg"
              alt=""
            />
            <p className="font-bold text-lg md:text-xl text-center">Bilmirəm</p>
          </Link>
        </div>
        {/* <div className="pt-8 md:pt-[37px] flex justify-center items-center">
          <Link>
            <button className="px-5 py-2.5 bg-[#56A8FF] hover:bg-[#56A8FF] shadow-lg hover:shadow-box rounded-xl text-white transition duration-300 ease-in-out transform hover:scale-105">
              Davam et
            </button>
          </Link>
        </div> */}
        {/* </div> */}
      </Modal>
    </>
  );
  // const [options, setOptions] = useState([]);
  // const handleSearch = (value) => {
  //   setOptions(value ? searchResult(value) : []);
  // };
  // const onSelect = (value) => {
  //   console.log("onSelect", value);
  // };
  // return (
  //   <AutoComplete
  //     className="bg-[#EFA0C6] w-[60.4rem] h-[20rem] rounded-[12.6rem] mb-5 flex justify-center items-center focus:outline-none focus:border-transparent focus:ring-0"
  //     popupMatchSelectWidth={252}
  //     style={{
  //       width: 300,
  //     }}
  //     options={options}
  //     onSelect={onSelect}
  //     onSearch={handleSearch}
  //     size="large"
  //   >
  //     <Input.Search
  //       className="bg-[#EFA0C6]"
  //       size="large"
  //       placeholder="input here"
  //       enterButton
  //     />
  //   </AutoComplete>
  // );
}

export default AdminPanel;

const App = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal with async logic
      </Button>
      <Modal
        title="Title"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
    </>
  );
};
