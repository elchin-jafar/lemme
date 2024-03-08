import { useState, useEffect } from "react";
import { User } from "iconsax-react";
import { Flex, Skeleton, Space, Table, Tag } from "antd";
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
      <div>
        <User size="32" color="#85B6FF" />
      </div>
      <div>
        <p className="text-[3.8rem] font-semibold">Məhsul siyahısı</p>
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
                  <Space size="middle">
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
