import { User } from "iconsax-react";
import {
  Flex,
  Skeleton,
  Space,
  Table,
  Button,
  message,
  Popconfirm,
} from "antd";
const { Column } = Table;
import {
  PlusOutlined,
  ArrowLeftOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { getAllStores, deleteStore } from "../../../utils/apiUtils";
import { useState, useEffect } from "react";
import { useStoreList } from "../../../store/storeList";

function Stores() {
  const [isLoading, setIsLoading] = useState(false);
  const { storeList, setStoreList } = useStoreList((state) => state);

  useEffect(() => {
    async function getStrs() {
      try {
        setIsLoading(true);
        const response = await getAllStores();
        setStoreList(response.data);
      } catch (error) {
        console.log(error);
        message.error("Əməliyyat uğursuz oldu");
      } finally {
        setIsLoading(false);
      }
    }
    getStrs();
  }, []);

  async function handleDeleteStore(id) {
    try {
      await deleteStore(id);
    } catch (err) {
      console.log(err);
      message.error("Əməliyyat uğursuz oldu");
    }
  }

  function confirm(id) {
    handleDeleteStore(id);
    setStoreList(storeList.filter((store) => store.id != id));
    message.success("Mağaza silindi");
  }

  return (
    <Flex justify="start" align="start" gap="large">
      <Flex vertical gap="middle">
        <User size="32" color="#85B6FF" />
        <Link to="/admin/main">
          {" "}
          <Button icon={<ArrowLeftOutlined />} />{" "}
        </Link>
      </Flex>
      <div>
        <Flex align="center" gap="large">
          <p className="text-[3.8rem] font-semibold">Mağaza siyahısı</p>
          <Link to="/admin/addStore">
            <Button icon={<PlusOutlined />}>Əlavə et</Button>
          </Link>
        </Flex>
        <div className="w-[70rem]">
          {isLoading ? (
            <Skeleton active />
          ) : (
            <Table dataSource={storeList} bordered pagination={{ pageSize: 5 }}>
              <Column title="Mağazanın adı" dataIndex="name" key="firstName" />
              <Column
                title="Mağazanın ünvanı"
                dataIndex="adress"
                key="skinType"
              />

              <Column
                title="Redaktə et / Sil"
                key="action"
                width="10px"
                render={(_, record) => (
                  <Space size="middle" key={record.id}>
                    <Link
                      to={`/admin/editStore/${record.id}`}
                      onClick={() => console.log(record)}
                    >
                      <Button type="dashed" icon={<EditOutlined />} />
                    </Link>
                    <Popconfirm
                      title="Mağazanı silmək"
                      description="Mağazanı silmək istədiyinizə əminsinizmi?"
                      onConfirm={() => confirm(record.id)}
                      okText="Bəli"
                      cancelText="Xeyr"
                    >
                      <Button type="primary" danger icon={<DeleteOutlined />} />
                    </Popconfirm>
                  </Space>
                )}
              />
            </Table>
          )}
        </div>
      </div>
    </Flex>
  );
}

export default Stores;
