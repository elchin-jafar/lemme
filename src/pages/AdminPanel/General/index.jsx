import { useState, useEffect } from "react";
import { User } from "iconsax-react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Flex, Form, Select, Table, Button, Space } from "antd";
import { Link } from "react-router-dom";
const { Option } = Select;
const { Item } = Form;
const { Column } = Table;
import { searchCountByStore, getAllStores } from "../../../utils/apiUtils";

function General() {
  const [stores, setStores] = useState([]);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    async function getStores() {
      const stores = await getAllStores();
      setStores(stores.data);
    }

    getStores();
  }, []);

  async function handleChange(data) {
    try {
      const response = await searchCountByStore(data);
      console.log("general response", response);
      const resData = await response?.data;
      setTableData(
        resData.map((el, index) => {
          return { ...el, key: index };
        })
      );
    } catch (err) {
      //pass
    }
  }

  console.log("table data", tableData);
  return (
    <>
      <Flex justify="start" align="start" gap="large">
        <Flex vertical gap="large">
          <User size="32" color="#85B6FF" />
          <Link to="/">
            <Button icon={<ArrowLeftOutlined />} />
          </Link>
        </Flex>

        <Flex vertical>
          <p className="text-[3.8rem] font-semibold">Ümumi</p>
          <Item label="Mağaza seçin">
            <Select placeholder="Select store IDs" onChange={handleChange}>
              {stores?.map((store) => (
                <Option
                  key={store.id}
                  value={store.id}
                >{`${store.name} (${store.adress})`}</Option>
              ))}
            </Select>
          </Item>
          {tableData.length > 0 && (
            <Table dataSource={tableData} bordered pagination={{ pageSize: 5 }}>
              <Column
                title="Məhsulun adı"
                dataIndex="productName"
                key="productName"
              />
              <Column
                title="Axtarış sayı"
                dataIndex="searchCount"
                key="searchCount"
              />
            </Table>
          )}
        </Flex>
      </Flex>
    </>
  );
}

export default General;
