import { Flex, Button, Form, Input, Select } from "antd";
import { User } from "iconsax-react";
import ImgUpload from "../../components/ImgUpload/ImgUpload";
import { Link, useParams } from "react-router-dom";
import { useAdminProductsStore } from "../../store/adminProductsStore";
// import { useAdminImagesStore } from "../../store/adminImagesStore";

function AdminEditProduct() {
  const { productList, setList } = useAdminProductsStore();
  const { id } = useParams();
  // const { imagesList } = useAdminImagesStore((state) => state);
  // console.log("zustand images on edit", imagesList);
  console.log("id", id);
  console.log("zustand prod list", productList);
  console.log(
    "zuu",
    productList.map((el) => el.id == id)
  );
  const initial = productList.filter((prod) => prod.id == id);
  console.log(initial);
  return (
    <Flex justify="start" align="start" gap="large">
      <div>
        <User size="32" color="#85B6FF" />
      </div>
      <div>
        <Flex align="center" gap="small">
          <p className="text-[3.8rem] font-semibold mr-[2rem]">Məhsul</p>
          <Button type="primary">Yadda saxla</Button>
          <Link to="/admin/products">
            <Button type="primary" danger>
              Ləvğ et
            </Button>
          </Link>
        </Flex>

        <Form initialValues={initial.at(0)}>
          <Form.Item label="Məhsul adı:" name="name">
            <Input size="large" />
          </Form.Item>
          <Form.Item label="Əsaslandırıcı:" name="overview">
            <Input size="large" />
          </Form.Item>
          <Form.Item label="Dəri növü:" name="skinType">
            <Select
              style={{
                width: 120,
              }}
              onChange={() => console.log("salam")}
              options={[
                {
                  value: "dry",
                  label: "Quru",
                },
                {
                  value: "oily",
                  label: "Yağlı",
                },
                {
                  value: "mixed",
                  label: "Qarışıq",
                },
              ]}
            />
          </Form.Item>
          <Form.Item
            label="Məhsulun şəkilləri:"
            name="images"
            initialValue={initial.at(0)?.images?.fileBase64}
          >
            <ImgUpload initialList={initial} />
          </Form.Item>
        </Form>
      </div>
    </Flex>
  );
}

export default AdminEditProduct;
