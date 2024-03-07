import React, { useState, useEffect } from "react";
import { AutoComplete, Input } from "antd";
import { Button, Modal } from "antd";
// import Link from "antd/es/typography/Link";
import { Popover } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faThumbsDown,
  faThumbsUp,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

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

const BASE_URL = "https://lemme.azurewebsites.net/";

function AdminPanel() {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");

  useEffect(() => {
    fetch(`${BASE_URL}api/Product/SearchProductByName?productName=fe`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

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
        title="Nəticə"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        width={800}
        footer={[]}
      >
        {/* <div className="flex justify-between pb-[30px] items-center">
          <h1 className="font-bold text-2xl">Nəticə</h1>
          <Link
            to="/"
            className="w-[50px] h-[50px] bg-[#d9d9d9] hover:bg-white flex justify-center items-center rounded-full shadow-btn hover:shadow-box"
          >
            <FontAwesomeIcon
              className="text-[30px] text-[#828282]"
              icon={faTimes}
            />
          </Link>
        </div> */}
        <div className="px-2.5">
          <p className="text-lg">
            Sizin dəri tipiniz qurudur. Bu mərhələdən sonra sizin baxış
            keçirdiyiniz məhsullarda əgər sizin dərinizə uyğundursa{" "}
            <span className="text-[#50AB64] underline">Yaşıl</span> əksinə uyğun
            deyilsə <span className="text-[#ff3100] underline">Qırmızı </span>
            teq ilə işarə olunacaqdır.
          </p>
          <h1 className="font-bold text-lg pt-5">Teqler:</h1>
          <div className="flex gap-[15px] pt-3">
            <span className="px-5 py-2.5 rounded-lg text-white bg-[#50AB64]">
              dəri tipinizə uyğundur
            </span>
            <span className="px-5 py-2.5 rounded-lg text-white bg-[#FF3100]">
              dəri tipinizə uyğun deyil
            </span>
          </div>
        </div>
        <div className="py-[35px] bg-[#000] bg-opacity-20 rounded-xl mt-[30px] shadow-box">
          <h1 className="text-center text-xl font-bold px-2 md:text-2xl sm:text-xl">
            Bu məlumat sizə faydalı oldumu?
          </h1>
          <div className="flex justify-center items-center gap-[35px] pt-5">
            <button>
              <FontAwesomeIcon
                className="text-[54px] text-[#50AB64]"
                icon={faThumbsUp}
              />
            </button>
            <button>
              <FontAwesomeIcon
                className="text-[54px] text-[#FF3100]"
                icon={faThumbsDown}
              />
            </button>
          </div>
        </div>
        <div className="pt-[37px] flex justify-center items-center">
          <Link>
            <button className="px-5 py-2.5 bg-[#56A8FF] hover:bg-[#5095df] shadow-lg hover:shadow-box rounded-xl text-white">
              Ana menyuya qayıt
            </button>
          </Link>
        </div>
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
