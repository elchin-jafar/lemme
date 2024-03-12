import { Modal } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useSkinTypeModalStore } from "../../store/skinTypeModalStore";
import { useActiceProductStore } from "../../store/activeProductStore";
import dry from "../../assets/dry.svg";
import oily from "../../assets/oily.svg";
import mixed from "../../assets/mixed.svg";
import idk from "../../assets/idk.svg";

function SkinTypeModal({ productId }) {
  const navigate = useNavigate();
  const {
    isOpen: isModalOpen,
    open: openModal,
    close: closeModal,
  } = useSkinTypeModalStore((state) => state);

  const { activeProductId, setActiveProductId } = useActiceProductStore(
    (state) => state
  );

  const handleIdk = () => {
    setActiveProductId(productId);
    closeModal();
    navigate("test");
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    closeModal();
  };
  return (
    <>
      <Modal
        title={
          <h1 className="text-[25px] sm:text-[30px] px-[22px] md:px-[15px] py-[15px]">
            Dəri tipinizi qeyd edin:
          </h1>
        }
        open={isModalOpen}
        // onOk={handleOk}
        // confirmLoading={confirmLoading}
        onCancel={handleCancel}
        className="custom-modal"
        width={700}
        footer={[]}
      >
        <div className="grid grid-cols-2 md:grid-cols-4  gap-[20px] md:gap-10 p-0 md:p-[15px] place-items-center">
          <Link
            onClick={closeModal}
            to={`/productPage/${productId}`}
            className="px-2.5 pt-2.5 group w-[160px] md:w-full h-[205px] bg-[#eee] hover:bg-white rounded-[30px] shadow-lg hover:shadow-box flex flex-col justify-around sm:justify-between items-center transition duration-300 ease-in-out transform hover:scale-105"
          >
            <img
              className="max-w-[140px] w-full max-h-[140px]  object-cover mb-3"
              src={dry}
              alt=""
            />
            <p className="font-bold text-[25px] text-center pb-[10px]">Quru</p>
          </Link>
          <Link
            onClick={closeModal}
            to={`/productPage/${productId}`}
            className="px-2.5 pt-2.5 group w-[160px] md:w-full h-[205px] bg-[#eee] hover:bg-white rounded-[30px] shadow-lg hover:shadow-box flex flex-col justify-around sm:justify-between items-center transition duration-300 ease-in-out transform hover:scale-105"
          >
            <img
              className="max-w-[140px] w-full max-h-[140px] object-cover mb-3"
              src={oily}
              alt=""
            />
            <p className="font-bold text-[25px] text-center pb-[10px]">Yağlı</p>
          </Link>
          <Link
            onClick={closeModal}
            to={`/productPage/${productId}`}
            className="px-2.5 pt-2.5 group w-[160px] md:w-full h-[205px] bg-[#eee] hover:bg-white rounded-[30px] shadow-lg hover:shadow-box flex flex-col justify-around sm:justify-between items-center transition duration-300 ease-in-out transform hover:scale-105"
          >
            <img
              className="max-w-[140px] w-full max-h-[140px] object-cover mb-3"
              src={mixed}
              alt=""
            />
            <p className="font-bold text-[25px] text-center pb-[10px]">
              Qarışıq
            </p>
          </Link>
          <Link
            onClick={handleIdk}
            className="px-2.5 pt-2.5 group w-[160px] md:w-full h-[205px] bg-[#eee] hover:bg-white rounded-[30px] shadow-lg hover:shadow-box flex flex-col justify-around sm:justify-between items-center transition duration-300 ease-in-out transform hover:scale-105"
          >
            <img
              className="max-w-[140px] w-full max-h-[140px] object-cover mb-3"
              src={idk}
              alt=""
            />
            <p className="font-bold text-[25px] text-center pb-[10px]">
              Bilmirəm
            </p>
          </Link>
        </div>
        <div className="pt-8 md:pt-[27px] flex justify-center items-center">
          <Link to="/">
            <button
              onClick={closeModal}
              className="px-5 py-2.5 bg-[#56A8FF] hover:bg-[#56A8FF] shadow-lg hover:shadow-box rounded-[30px] text-white transition duration-300 ease-in-out transform hover:scale-105"
            >
              Ana menyuya qayıt
            </button>
          </Link>
        </div>
      </Modal>
    </>
  );
}

export default SkinTypeModal;
