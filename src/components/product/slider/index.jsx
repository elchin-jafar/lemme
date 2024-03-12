import { useState, useEffect } from 'react';
import { getProductById } from "../../../utils/apiUtils";
import ImgBase64 from '../../ImgBase64/ImgBase64'; 
import { useParams } from 'react-router-dom';

const ImageSlider = () => {
  const [mainImage, setMainImage] = useState("");
  const [thumbnails, setThumbnails] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProductById(id);
        const images = response.data.images;
        if (images && images.length > 0) {
          const validImages = images.filter(image => image.fileBase64);
          if (validImages.length > 0) {
            setMainImage(validImages[0].fileBase64);
            setThumbnails(validImages.slice(1).map(image => image.fileBase64));
          } else {
            console.error("No valid images found in API response.");
          }
        }
      } catch (error) {
        console.error("An error occurred while fetching images:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleImageClick = (index) => {
    setCurrentSlide(index);
    const tempMainImage = mainImage;
    setMainImage(thumbnails[index]);
    thumbnails[index] = tempMainImage;
    setThumbnails([...thumbnails]);
  };

  return (
    <div className="max-w-[310px] lg:max-w-[354px] flex lg:flex-col gap-[7px] w-full h-[220px] lg:h-[400px] relative ">
      {/* Ana resim */}
      <ImgBase64 data={mainImage} alt="" className="min-w-[240px] w-full h-[220px] lg:max-w-[354px] lg:h-[270px]  lg:rounded-[30px]" />
      
      {/* Nokta (dot) indikatörler */}
      <div className="absolute bottom-[11px] pl-10 lg:pl-[116px] lg:bottom-[140px] left-1/3 transform -translate-x-1/2 z-2">
        {thumbnails.map((_, index) => (
          <span
            key={index}
            style={{
              display: 'inline-block',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: index === currentSlide ? '#fff' : '#c4c4c4',
              margin: '0 4px',
              cursor: 'pointer'
            }}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
      
      {/* Küçük resimler */}
      <div className="min-w-[84px] w-full h-[220px] lg:h-auto lg:max-w-[354px] flex flex-col lg:flex-row lg:overflow-x-auto overflow-auto  lg:gap-[15px] lg:py-3 lg:px-5 gap-[2px] scrollbar-hidden">
        {thumbnails.map((image, index) => (
          <ImgBase64 key={index} data={image} alt="" className= 'w-[84px] min-h-[106px] max-h-[106px]  lg:min-w-[100px] lg:min-h-[100px] h-full lg:rounded-[15px] cursor-pointer ' onClick={() => handleImageClick(index)} />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
