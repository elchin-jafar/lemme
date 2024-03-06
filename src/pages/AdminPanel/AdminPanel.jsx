import React, { useState, useEffect } from "react";
import { AutoComplete, Input } from "antd";

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
  const [options, setOptions] = useState([]);

  //   useEffect(() => {
  //     async function mainFunc() {
  //       const res = await fetch(
  //         "https://lemme.azurewebsites.net/api/SkinType/DetermineSkinType/141"
  //       );
  //       const data = await res.json();
  //       console.log(data);
  //     }
  //     mainFunc();
  //   }, []);

  const handleSearch = (value) => {
    setOptions(value ? searchResult(value) : []);
  };
  const onSelect = (value) => {
    console.log("onSelect", value);
  };
  return (
    <AutoComplete
      className="bg-[#EFA0C6] w-[60.4rem] h-[10rem] rounded-[12.6rem] mb-5 flex justify-center items-center focus:outline-none focus:border-transparent focus:ring-0"
      popupMatchSelectWidth={252}
      style={{
        width: 300,
      }}
      options={options}
      onSelect={onSelect}
      onSearch={handleSearch}
      size="large"
    >
      <Input.Search
        className="bg-[#EFA0C6]"
        size="large"
        placeholder="input here"
        enterButton
      />
    </AutoComplete>
  );
}

export default AdminPanel;
