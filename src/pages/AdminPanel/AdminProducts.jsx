import { useState, useEffect } from "react";
import { User, ArrowLeft, Add } from "iconsax-react";
import { Flex, Skeleton, Space, Table, Tag, Button } from "antd";
import { PlusOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { getAll } from "../../utils/apiUtils";
const { Column } = Table;

function AdminProducts() {
  const [productList, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  console.log(isLoading);
  console.log(productList);

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
                    <a>Delete</a>
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
