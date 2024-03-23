import { useState, useEffect } from "react";
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
import {
  PlusOutlined,
  ArrowLeftOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { getAll, deleteProduct } from "../../../utils/apiUtils";
import { useAdminProductsStore } from "../../../store/adminProductsStore";
const { Column } = Table;

function Products() {
  const [isLoading, setIsLoading] = useState(false);
  const { productList, setList } = useAdminProductsStore((state) => state);

  useEffect(() => {
    async function getProds() {
      try {
        setIsLoading(true);
        const res = await getAll();
        const data = res?.data;
        setList(data);
      } finally {
        setIsLoading(false);
      }
    }
    getProds();
  }, []);

  async function handleDeleteProduct(id) {
    try {
      await deleteProduct(id);
    } catch (err) {
      console.log(err);
    }
  }

  const confirm = (id) => {
    handleDeleteProduct(id);
    setList(productList.filter((prod) => prod.id != id));
    message.success("Məhsul silindi");
  };

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
          <p className="text-[3.8rem] font-semibold">Məhsul siyahısı</p>
          <Link to="/admin/addProduct">
            <Button icon={<PlusOutlined />}>Əlavə et</Button>
          </Link>
        </Flex>
        <div className="w-[70rem]">
          {isLoading ? (
            <Skeleton active />
          ) : (
            <Table
              dataSource={productList}
              bordered
              pagination={{ pageSize: 5 }}
            >
              <Column title="Məhsulun adı" dataIndex="name" key="firstName" />
              <Column title="Dəri tipi" dataIndex="skinType" key="skinType" />

              <Column
                title="Redaktə et / Sil"
                key="action"
                width="10px"
                render={(_, record) => (
                  <Space size="middle" key={record.id}>
                    <Link to={`/admin/editProduct/${record.id}`}>
                      <Button type="dashed" icon={<EditOutlined />} />
                    </Link>
                    <Popconfirm
                      title="Məhsulu sil"
                      description="Məhsulu silmək istədiyinizə əminsinizmi?"
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

export default Products;
