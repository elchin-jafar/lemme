import { useState, useEffect } from "react";
import { User, ArrowLeft, Add } from "iconsax-react";
import {
  Flex,
  Skeleton,
  Space,
  Table,
  Tag,
  Button,
  message,
  Popconfirm,
} from "antd";
import { PlusOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { getAll, deleteProduct } from "../../utils/apiUtils";
import { useAdminProductsStore } from "../../store/adminProductsStore";
const { Column } = Table;

function AdminProducts() {
  // const [productList, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { productList, setList } = useAdminProductsStore((state) => state);

  useEffect(() => {
    async function getRoll() {
      try {
        setIsLoading(true);
        const res = await getAll();
        const data = res?.data;
        setList(data);
      } finally {
        setIsLoading(false);
      }
    }
    getRoll();
  }, []);

  async function handleDeleteProduct(id) {
    try {
      const res = await deleteProduct(id);
      if (res.ok) {
        // setList(productList.filter((prod) => prod.id != id));
        // console.log("updatedList", productList);
      }
    } catch (err) {
      console.log(err);
    }
  }

  console.log(isLoading);
  console.log(productList);

  const confirm = (id) => {
    handleDeleteProduct(id);
    setList(productList.filter((prod) => prod.id != id));
    console.log("updatedList", productList);
    message.success("Product Deleted");
  };
  const cancel = (e) => {
    console.log(e);
    message.error("Cancelled");
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
            <Table dataSource={productList} bordered>
              <Column title="Name" dataIndex="name" key="firstName" />

              <Column
                title="Action"
                key="action"
                render={(_, record) => (
                  <Space size="middle" key={record.id}>
                    <Link
                      to={`/admin/editProduct/${record.id}`}
                      onClick={() => console.log(record)}
                    >
                      Edit
                    </Link>
                    {/* <a onClick={() => handleDeleteProduct(record.id)}>Delete</a> */}
                    <Popconfirm
                      title="Delete the product"
                      description="Are you sure to delete this product?"
                      onConfirm={() => confirm(record.id)}
                      onCancel={cancel}
                      okText="Yes"
                      cancelText="No"
                    >
                      <Button danger>Delete</Button>
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

export default AdminProducts;
