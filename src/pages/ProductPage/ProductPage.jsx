import { ArrowLeft, ArrowRight } from "iconsax-react";
import { Link, useParams } from "react-router-dom";
// import ImageSlider from "./slider";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { getProductById, checkSuit } from "../../utils/apiUtils";
import { useActiceProductStore } from "../../store/activeProductStore";
import { useUserSkinType } from "../../store/userSkinType";
import { Spin } from "antd";
import Fancy from "../../components/FancyBox/FancyBox";
import CarouselFancy from "../../components/FancyBox/Carousel";
import ImgBase64 from "../../components/ImgBase64/ImgBase64";

function ProductPage() {
  const [activeButton, setActiveButton] = useState("firstView");
  const [isProdSuits, setIsProdSuits] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const [productData, setProductData] = useState({});
  const { activeProductId, setActiveProductId } = useActiceProductStore(
    (state) => state
  );

  const { skinType } = useUserSkinType((state) => state);

  console.log("activeProductId on prod page", activeProductId);
  console.log("isProdSuits", isProdSuits);
  console.log("productData", productData);
  console.log("skinType", skinType);
  const handleInfoChange = (title) => {
    setActiveButton(title);
  };

  useEffect(() => {
    const fetchData = async () => {
      // try {
      //   const response = await getProductById(id);
      //   console.log(response.data);
      //   setProductData(response.data);
      // } catch (error) {
      //   console.error("An error occurred while fetching product info:", error);
      // }

      try {
        setIsLoading(true);
        const promise = await Promise.all([
          getProductById(id),
          checkSuit(id, skinType),
        ]);
        console.log("promise", promise);
        setProductData(promise.at(0).data);
        setIsProdSuits(promise.at(1).data.response);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
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

  return isLoading ? (
    <div className="h-screen flex items-center justify-stretch border border-black">
      <div className="w-screen my-[2rem] mx-0 py-[3rem] px-[5rem] text-center rounded-[4px]">
        <Spin size="large" />
      </div>
    </div>
  ) : (
    <div className=" flex justify-center h-auto">
      <div className="max-w-[1319px] py-[14px] px-[22px] w-full md:px-[30px] md:py-[10px]">
        <div className="flex justify-between items-center gap-3 pb-2.5 lg:pb-[15px]">
          <div className="flex md:items-center lg:items-start flex-col gap-[15px] md:flex-row lg:flex-col">
            <h1 className="flex font-bold text-[20px] lg:text-[30px] text-[#212121] ">
              Məhsulun adı
            </h1>
            {/* <span className=" w-[140px] h-[24px] px-[10.5px] py-[3px]  lg:px-5 lg:py-2.5 lg:w-[238px] lg:h-[34px] rounded-lg text-white font-bold text-[12px] lg:text-[16px] bg-[#50AB64]">
              dəri tipinizə uyğundur
            </span> */}
            {isProdSuits ? (
              <span className=" w-[140px] h-[26px] px-[10.5px] py-[3px]  lg:px-5 lg:py-2.5 lg:w-[238px] lg:h-[34px] rounded-lg text-white font-bold text-[12px] lg:text-[16px] bg-[#50AB64]">
                dəri tipinizə uyğundur
              </span>
            ) : (
              <span className=" w-[150px] h-[26px] px-[10.5px] py-[3px]  lg:px-5 lg:py-2.5 lg:w-[238px] lg:h-[34px] rounded-lg text-white font-bold text-[12px] lg:text-[16px] bg-[#FF3100]">
                dəri tipinizə uyğun deyil
              </span>
            )}
            {/* <span className=" w-[140px] h-[26px] px-[10.5px] py-[6px]  lg:px-5 lg:py-2.5 lg:w-[238px] lg:h-[44px] rounded-lg text-white font-bold text-[12px] lg:text-[20px] bg-[#50AB64]">
              dəri tipinizə uyğundur
            </span> */}
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
        <div className="flex flex-col max-w-[40rem] sm:items-center sm:max-w-[40rem] md:flex-col md:max-w-[40rem] lg:flex-row gap-[10px] lg:gap-[50px] lg:max-w-[68rem]">
          {/* <ImageSlider /> */}
          <Fancy
            // Sample options
            options={{
              Carousel: {
                infinite: false,
              },
            }}
          >
            <CarouselFancy
              // Sample options
              options={{ infinite: false }}
            >
              {productData?.images?.map((img, index) => (
                <div
                  key={index}
                  className="f-carousel__slide"
                  data-fancybox="gallery"
                  data-src={`data:image/jpeg;base64,${img}`}
                  data-thumb-src={`data:image/jpeg;base64,${img}`}
                >
                  <ImgBase64 data={img} alt="product image" />
                </div>
              ))}
              {/* <div
                className="f-carousel__slide"
                data-fancybox="gallery"
                data-src="https://lipsum.app/id/60/1600x1200"
                data-thumb-src="https://lipsum.app/id/60/200x150"
              >
                <img
                  alt=""
                  src="https://lipsum.app/id/60/400x300"
                  width="400"
                  height="300"
                />
              </div>
              <div
                className="f-carousel__slide"
                data-fancybox="gallery"
                data-src="https://lipsum.app/id/61/1600x1200"
                data-thumb-src="https://lipsum.app/id/61/200x150"
              >
                <img
                  alt=""
                  src="https://lipsum.app/id/61/400x300"
                  width="400"
                  height="300"
                />
              </div>
              <div
                className="f-carousel__slide"
                data-fancybox="gallery"
                data-src="https://lipsum.app/id/62/1600x1200"
                data-thumb-src="https://lipsum.app/id/62/200x150"
              >
                <img
                  alt=""
                  src="https://lipsum.app/id/62/400x300"
                  width="400"
                  height="300"
                />
              </div>
              <div
                className="f-carousel__slide"
                data-fancybox="gallery"
                data-src="https://lipsum.app/id/63/1600x1200"
                data-thumb-src="https://lipsum.app/id/63/200x150"
              >
                <img
                  alt=""
                  src="https://lipsum.app/id/63/400x300"
                  width="400"
                  height="300"
                />
              </div>
              <div
                className="f-carousel__slide"
                data-fancybox="gallery"
                data-src="https://lipsum.app/id/64/1600x1200"
                data-thumb-src="https://lipsum.app/id/64/200x150"
              >
                <img
                  alt=""
                  src="https://lipsum.app/id/64/400x300"
                  width="400"
                  height="300"
                />
              </div> */}
            </CarouselFancy>
          </Fancy>

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

export default ProductPage;
