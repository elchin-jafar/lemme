import { Modal } from "antd";
import { Link } from "react-router-dom";
import { useResultModalStore } from "../../store/resultModalStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsDown,
  faThumbsUp,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

function ResultModal() {
  const {
    isOpen: isModalOpen,
    open: openModal,
    close: closeModal,
  } = useResultModalStore((state) => state);

  const handleCancel = () => {
    console.log("Clicked cancel button");
    closeModal();
  };
  return (
    <>
      <Modal
        title="Nəticə"
        open={isModalOpen}
        // onOk={handleOk}
        // confirmLoading={confirmLoading}
        onCancel={handleCancel}
        width={800}
        footer={[]}
        closable={false}
      >
        <div className="px-2.5">
          <p className="text-lg">
            Sizin dəri tipiniz qurudur. Bu mərhələdən sonra sizin baxış
            keçirdiyiniz məhsullarda əgər sizin dərinizə uyğundursa{" "}
            <span className="text-[#50AB64] underline">Yaşıl</span> əksinə uyğun
            deyilsə <span className="text-[#ff3100] underline">Qırmızı </span>
            teq ilə işarə olunacaqdır.
          </p>
          <h1 className="font-bold text-lg pt-5">Teqler:</h1>
          <div className="flex gap-[15px] pt-3">
            <span className="px-5 py-2.5 rounded-lg text-white bg-[#50AB64]">
              dəri tipinizə uyğundur
            </span>
            <span className="px-5 py-2.5 rounded-lg text-white bg-[#FF3100]">
              dəri tipinizə uyğun deyil
            </span>
          </div>
        </div>
        <div className="py-[35px] bg-[#000] bg-opacity-20 rounded-xl mt-[30px] shadow-box">
          <h1 className="text-center text-xl font-bold px-2 md:text-2xl sm:text-xl">
            Bu məlumat sizə faydalı oldumu?
          </h1>
          <div className="flex justify-center items-center gap-[35px] pt-5">
            <button>
              <FontAwesomeIcon
                className="text-[54px] text-[#50AB64]"
                icon={faThumbsUp}
              />
            </button>
            <button>
              <FontAwesomeIcon
                className="text-[54px] text-[#FF3100]"
                icon={faThumbsDown}
              />
            </button>
          </div>
        </div>
        <div className="pt-[37px] flex justify-center items-center">
          <Link to="/" onClick={closeModal}>
            <button className="px-5 py-2.5 bg-[#56A8FF] hover:bg-[#5095df] shadow-lg hover:shadow-box rounded-xl text-white">
              Ana menyuya qayıt
            </button>
          </Link>
        </div>
      </Modal>
    </>
  );
}

export default ResultModal;
