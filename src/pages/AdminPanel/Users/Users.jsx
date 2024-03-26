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
  Tag,
} from "antd";
import {
  PlusOutlined,
  ArrowLeftOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { getAllUsers, deleteUser } from "../../../utils/apiUtils";
// import { useAdminProductsStore } from "../../../store/adminProductsStore";
const { Column } = Table;

function Users() {
  const [isLoading, setIsLoading] = useState(false);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    async function getUsrs() {
      try {
        setIsLoading(true);
        const res = await getAllUsers();
        const data = res?.data;
        setUserList(
          data.map((el) => {
            return { ...el, key: el.id };
          })
        );
      } finally {
        setIsLoading(false);
      }
    }
    getUsrs();
  }, []);

  async function handleDeleteUser(id) {
    try {
      await deleteUser(id);
    } catch (err) {
      console.log(err);
    }
  }

  const confirm = (id) => {
    handleDeleteUser(id);
    setUserList(userList.filter((user) => user.id != id));
    message.success("Istifadeci silindi");
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
          <p className="text-[3.8rem] font-semibold">İstifadəçi siyahısı</p>
          <Link to="/admin/register">
            <Button icon={<PlusOutlined />}>Əlavə et</Button>
          </Link>
        </Flex>
        <div className="w-[70rem]">
          {isLoading ? (
            <Skeleton active />
          ) : (
            <Table dataSource={userList} bordered pagination={{ pageSize: 5 }}>
              <Column title="Ad Soyad" dataIndex="fullName" key="fullname" />
              <Column title="Email" dataIndex="email" key="email" />
              <Column title="Username" dataIndex="userName" key="userName" />
              <Column
                title="Rollar"
                dataIndex="roles"
                key="roles"
                render={(_, { roles }) => {
                  return (
                    <>
                      {roles.map((role) => {
                        return (
                          <Tag color="green" key={role}>
                            {role.toUpperCase()}
                          </Tag>
                        );
                      })}
                    </>
                  );
                }}
              />
              <Column
                title="Sil"
                key="action"
                width="10px"
                render={(_, record) => (
                  <Space size="middle" key={record.id}>
                    <Popconfirm
                      title="Istifadəçini sil"
                      description="Istifadəçini silmək istədiyinizə əminsinizmi?"
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

export default Users;
