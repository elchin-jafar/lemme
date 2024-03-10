import { Modal } from "antd";
import { Link } from "react-router-dom";
import { useResultModalStore } from "../../store/resultModalStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function ResultModal() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleThumbsUpClick = () => {
    setSelectedButton("thumbsUp");
    fakePostRequest("Like");
  };

  const handleThumbsDownClick = () => {
    setSelectedButton("thumbsDown");
    fakePostRequest("DissLike");
  };

  const fakePostRequest = (buttonType) => {
    console.log(`"${buttonType}"düğmesine tıklandı, fake post gönderildi.`);
  };

  const {
    isOpen: isModalOpen,  
    close: closeModal,
  } = useResultModalStore((state) => state);

  const handleCancel = () => {
    console.log("Clicked cancel button");
    closeModal();
  };
  return (
    <>
      <Modal
        title={<h1 className="text-[25px] md:text-[40px] px-0 md:px-[30px] pt-[30px]">Nəticə</h1>}
        open={isModalOpen}
        className="custom-modal"
        // onOk={handleOk}
        // confirmLoading={confirmLoading}
        onCancel={handleCancel}
        width={800}
        footer={[]}
        closable={false}
      >
        <div className="md:px-[30px] px-0">
          <p className="md:text-[25px] text-[15px]">
            Sizin dəri tipiniz qurudur. Bu mərhələdən sonra sizin baxış
            keçirdiyiniz məhsullarda əgər sizin dərinizə uyğundursa{" "}
            <span className="text-[#50AB64] underline">Yaşıl</span> əksinə uyğun
            deyilsə <span className="text-[#ff3100] underline">Qırmızı </span>
            teq ilə işarə olunacaqdır.
          </p>
          <div className="flex  gap-4 md:flex-col">
            <h1 className="font-bold md:text-[25px] text-[15px] pt-[30px]">Teqler:</h1>
            <div className="flex flex-col md:flex-row gap-[15px] pt-10 md:pt-3">
              <span className="px-5 py-2.5 text-[12px] md:text-[20px] rounded-[10px] text-white bg-[#50AB64]">
                dəri tipinizə uyğundur
              </span>
              <span className="px-5 py-2.5 text-[12px] md:text-[20px] rounded-[10px] text-white bg-[#FF3100]">
                dəri tipinizə uyğun deyil
              </span>
            </div>
          </div>
        </div>
        <div className="py-[35px] md:mx-[30px] mx-0 bg-[#000] bg-opacity-20 rounded-xl mt-[30px] shadow-box">
          <h1 className="text-center text-[17px] font-bold px-4  md:text-[40px]">
            Bu məlumat sizə faydalı oldumu?
          </h1>
          <div className="flex justify-center items-center gap-[35px] pt-5">
            <button onClick={handleThumbsUpClick}>
              <FontAwesomeIcon
                className={`text-[43px] md:text-[74px] text-[#50AB64] ${
                  selectedButton === "thumbsUp" ? "opacity-1" : "opacity-[0.4]"
                }`}
                icon={faThumbsUp}
              />
            </button>
            <button onClick={handleThumbsDownClick}>
              <FontAwesomeIcon
                className={`text-[43px] md:text-[74px] text-[#FF3100] ${
                  selectedButton === "thumbsDown" ? "opacity-1" : "opacity-[0.4]"
                }`}
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
