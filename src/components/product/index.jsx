import { ArrowLeft, ArrowRight } from "iconsax-react";
import { Link, useParams } from "react-router-dom";
import ImageSlider from "./slider";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { getProductById } from "../../utils/apiUtils";
import { useActiceProductStore } from "../../store/activeProductStore";

function Product() {
  const [activeButton, setActiveButton] = useState("firstView");
  const { id } = useParams();
  const [productData, setProductData] = useState(null);
  const { activeProductId, setActiveProductId } = useActiceProductStore(
    (state) => state
  );

  console.log("activeProductId on prod page", activeProductId);
  const handleInfoChange = (title) => {
    setActiveButton(title);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProductById(id);
        setProductData(response.data);
      } catch (error) {
        console.error("An error occurred while fetching product info:", error);
      }
    };

    fetchData();
  }, [id]);

  const infoText = {
    ingredient: {
      title: "İnqridientlər",
      content: productData ? productData.ingredients : "",
    },
    usage: {
      title: "İstifadə qaydası",
      content: productData ? productData.howToUse : "",
    },
    firstView: {
      title: "İlk baxışda",
      content: productData ? productData.overview : "",
    },
  };

  function handleMainMenu() {
    setActiveProductId(0);
  }

  return (
    <div className=" flex justify-center h-auto">
      <div className="max-w-[1319px] py-[14px] px-[22px] w-full md:px-[30px] md:py-[10px]">
        <div className="flex justify-between items-center gap-3 pb-2.5 lg:pb-[15px]">
          <div className="flex md:items-center lg:items-start flex-col gap-[15px] md:flex-row lg:flex-col">
            <h1 className="flex font-bold text-[20px] lg:text-[30px] text-[#212121] ">
              Məhsulun adı
            </h1>
            <span className=" w-[140px] h-[24px] px-[10.5px] py-[3px]  lg:px-5 lg:py-2.5 lg:w-[238px] lg:h-[34px] rounded-lg text-white font-bold text-[12px] lg:text-[16px] bg-[#50AB64]">
              dəri tipinizə uyğundur
            </span>
          </div>
          <div
            className="w-[34px] h-[34px] lg:w-[150px] lg:h-[100px]"
            onClick={handleMainMenu}
          >
            <img
              className="hidden lg:flex"
              src="../src/assets/logo2.png"
              alt=""
            />
            <Link
              to="/"
              className="lg:hidden w-[30px] h-[30px] bg-[#d9d9d9] hover:bg-white flex justify-center items-center rounded-full shadow-btn hover:shadow-box"
            >
              <FontAwesomeIcon
                className="text-[20px] text-[#828282]"
                icon={faTimes}
              />
            </Link>
          </div>
        </div>
        <h1 className="py-2.5 px-3 font-bold text-[20px] flex lg:hidden">
          {infoText[activeButton].title}
        </h1>
        <div className="flex flex-col sm:items-center md:flex-col lg:flex-row gap-[10px] lg:gap-[50px]">
          <ImageSlider />
          <div className="max-w-[915px] w-full h-auto">
            <h1 className="py-2.5 px-3 font-bold text-[20px] hidden lg:flex lg:text-[25px]">
              {infoText[activeButton].title}
            </h1>
            <div className="py-4 flex gap-2.5 lg:hidden">
              <button
                className={`w-[114px] h-[36px] flex items-center gap-[10px] px-[10px] text-[13px] font-bold  py-[5px] bg-[#56A8FF] hover:bg-[#5095df] shadow-lg hover:shadow-box rounded-[15px] text-white ${
                  activeButton === "firstView" ? "hidden" : ""
                }`}
                onClick={() => handleInfoChange("firstView")}
              >
                İlk baxışda
                <ArrowRight size="13" color="#FFF" />
              </button>
              <button
                className={`w-[112px] h-[36px] flex items-center gap-[10px] px-[10px] text-[13px] font-bold  py-[10px] bg-[#56A8FF] hover:bg-[#5095df] shadow-lg hover:shadow-box rounded-[15px] text-white ${
                  activeButton === "ingredient" ? "hidden" : ""
                }`}
                onClick={() => handleInfoChange("ingredient")}
              >
                İnqridientlər
                <ArrowRight size="13" color="#FFF" />
              </button>
              <button
                className={`w-[134px] h-[36px] flex items-center gap-[10px] px-[10px] text-[13px] font-bold  py-[5px] bg-[#56A8FF] hover:bg-[#5095df] shadow-lg hover:shadow-box rounded-[15px] text-white ${
                  activeButton === "usage" ? "hidden" : ""
                }`}
                onClick={() => handleInfoChange("usage")}
              >
                İstifadə qaydası
                <ArrowRight size="13" color="#FFF" />
              </button>
            </div>
            <p className="py-4 px-[14px] h-auto lg:px-3 lg:h-[207px] text-[16px] leading-[22px] overflow-auto scrollbar-hidden bg-[#fff] lg:bg-transparent rounded-[15px]">
              {infoText[activeButton].content}
            </p>
            <div className="py-3 pt-[15px] flex-col gap-3 hidden lg:flex">
              <button
                className={`w-[171px] h-[44px] flex items-center gap-[10px] px-[20px] text-[13px] font-bold lg:text-[20px] py-[5px] bg-[#56A8FF] hover:bg-[#5095df] shadow-lg hover:shadow-box rounded-[15px] text-white ${
                  activeButton === "firstView" ? "hidden" : ""
                }`}
                onClick={() => handleInfoChange("firstView")}
              >
                İlk baxışda
                <ArrowRight size="20" color="#FFF" />
              </button>
              <button
                className={`w-[185px] h-[44px] flex items-center gap-[10px] px-[20px] text-[13px] font-bold lg:text-[20px] py-[5px] bg-[#56A8FF] hover:bg-[#5095df] shadow-lg hover:shadow-box rounded-[15px] text-white ${
                  activeButton === "ingredient" ? "hidden" : ""
                }`}
                onClick={() => handleInfoChange("ingredient")}
              >
                İnqridientlər
                <ArrowRight size="20" color="#FFF" />
              </button>
              <button
                className={`w-[218px] h-[44px] flex items-center gap-[10px] px-[20px] text-[13px] font-bold lg:text-[20px] py-[5px] bg-[#56A8FF] hover:bg-[#5095df] shadow-lg hover:shadow-box rounded-[15px] text-white ${
                  activeButton === "usage" ? "hidden" : ""
                }`}
                onClick={() => handleInfoChange("usage")}
              >
                İstifadə qaydası
                <ArrowRight size="20" color="#FFF" />
              </button>
            </div>
          </div>
        </div>
        <div className="py-3 hidden lg:flex">
          <Link to="/">
            <button
              onClick={handleMainMenu}
              className="flex items-center gap-3  px-[38px] py-[5px] font-bold text-[13px] lg:text-[20px] bg-[#56A8FF] hover:bg-[#5095df] shadow-lg hover:shadow-box rounded-[15px] text-white"
            >
              <ArrowLeft size="20" color="#FFF" />
              Ana Menu
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Product;
