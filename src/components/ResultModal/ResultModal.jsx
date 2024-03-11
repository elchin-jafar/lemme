import { Modal } from "antd";
import { Link } from "react-router-dom";
import { useResultModalStore } from "../../store/resultModalStore";
import { useActiceProductStore } from "../../store/activeProductStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function ResultModal({
  productId,
  selectedAnswers,
  selectedVariant,
  testResult,
}) {
  const [selectedButton, setSelectedButton] = useState(null);

  const { isOpen: isModalOpen, close: closeModal } = useResultModalStore(
    (state) => state
  );

  const { activeProductId, setActiveProductId } = useActiceProductStore(
    (state) => state
  );

  const handleThumbsUpClick = () => {
    setSelectedButton("thumbsUp");
    fakePostRequest("Like");
  };

  const handleThumbsDownClick = () => {
    setSelectedButton("thumbsDown");
    fakePostRequest("DissLike");
  };

  const fakePostRequest = (buttonType) => {
    console.log(`"${buttonType}" düğmesine tıklandı, fake post gönderildi.`);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    closeModal();
  };

  const resultText = {
    A: "Quru və ya həssas dəriniz ola bilər.",
    B: "Dərinizin normal və ya qarışıq olması ehtimalı var.",
    C: "Dəriniz yağlı və ya sızanaqlara meylli ola bilər.",
  };

  return (
    <>
      <Modal
        title={
          <h1 className="text-[20px] md:text-[30px] px-[22px] md:px-[20px] pt-[15px]">
            Nəticə
          </h1>
        }
        open={isModalOpen}
        className="custom-modal"
        onCancel={handleCancel}
        width={700}
        footer={[]}
        closable={false}
      >
        <div className="md:px-[20px] px-0">
          <p className="md:text-[20px] text-[15px]">
            Sizin dəri tipiniz <b>{testResult}</b> <br />
            Bu mərhələdən sonra sizin baxış keçirdiyiniz məhsullarda əgər sizin
            dərinizə uyğundursa{" "}
            <span className="text-[#50AB64] underline">Yaşıl</span> əksinə uyğun
            deyilsə <span className="text-[#ff3100] underline">Qırmızı </span>
            teq ilə işarə olunacaqdır.
          </p>
          <div className="flex gap-4 md:flex-col">
            <h1 className="font-bold md:text-[20px] text-[15px] pt-[20px]">
              Teqler:
            </h1>
            <div className="flex flex-col md:flex-row gap-[15px] pt-10 md:pt-3">
              <span className="px-5 py-2.5 text-[12px] md:text-[16px] rounded-[10px] text-white bg-[#50AB64]">
                dəri tipinizə uyğundur
              </span>
              <span className="px-5 py-2.5 text-[12px] md:text-[16px] rounded-[10px] text-white bg-[#FF3100]">
                dəri tipinizə uyğun deyil
              </span>
            </div>
          </div>
        </div>
        <div className="py-[15px] md:mx-[20px] mx-0 bg-[#000] bg-opacity-20 rounded-xl mt-[15px] shadow-box">
          <h1 className="text-center text-[17px] font-bold px-4  md:text-[30px]">
            Bu məlumat sizə faydalı oldumu?
          </h1>
          <div className="flex justify-center items-center gap-[35px] pt-5">
            <button onClick={handleThumbsUpClick}>
              <FontAwesomeIcon
                className={`text-[33px] md:text-[54px] text-[#50AB64] ${
                  selectedButton === "thumbsUp" ? "" : "text-[#eaeef1]"
                }`}
                icon={faThumbsUp}
              />
            </button>
            <button onClick={handleThumbsDownClick}>
              <FontAwesomeIcon
                className={`text-[33px] md:text-[54px] text-[#FF3100] ${
                  selectedButton === "thumbsDown" ? "" : "text-[#eaeef1]"
                }`}
                icon={faThumbsDown}
              />
            </button>
          </div>
        </div>
        <div className="pt-[27px] flex justify-center items-center">
          {activeProductId ? (
            <Link to={`/productPage/${activeProductId}`}>
              <button
                onClick={closeModal}
                className="px-5 py-2.5 bg-[#56A8FF] hover:bg-[#5095df] shadow-lg hover:shadow-box rounded-xl text-white"
              >
                Davam et
              </button>
            </Link>
          ) : (
            <Link to="/">
              <button
                onClick={closeModal}
                className="px-5 py-2.5 bg-[#56A8FF] hover:bg-[#5095df] shadow-lg hover:shadow-box rounded-xl text-white"
              >
                Ana menyuya qayıt
              </button>
            </Link>
          )}
        </div>
      </Modal>
    </>
  );
}

export default ResultModal;
