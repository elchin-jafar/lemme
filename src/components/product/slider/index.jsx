import { useState } from 'react';

const ImageSlider = () => {
  const [mainImage, setMainImage] = useState("../src/assets/Product1.svg");
  const [thumbnails, setThumbnails] = useState([
    "../src/assets/Product2.svg",
    "../src/assets/Product3.svg",
    "../src/assets/Product4.svg"
  ]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleImageClick = (index) => {
    const clickedImage = thumbnails[index];
    setMainImage(clickedImage);
    setCurrentSlide(index);
    const newThumbnails = thumbnails.filter((_, i) => i !== index);
    setThumbnails([mainImage, ...newThumbnails]);
  };

  const handleDotClick = (index) => {
    setMainImage(thumbnails[index]);
    setCurrentSlide(index);
    const newThumbnails = thumbnails.filter((_, i) => i !== index);
    setThumbnails([mainImage, ...newThumbnails]);
  };

  return (
    <div className="max-w-[310px] w-full lg:max-w-[354px] flex lg:flex-col gap-[7px] w-full h-auto relative ">
      <img className="max-w-[240px] w-full h-[320px] lg:max-w-[354px] lg:h-[472px] object-cover object-center lg:rounded-[30px]" src={mainImage} alt="" />
      <div className="absolute bottom-[11px] pl-10  lg:pl-[116px] lg:bottom-[130px] left-1/3 transform -translate-x-1/2 z-2" >
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
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
      <div className="flex flex-col lg:flex-row justify-center lg:gap-[15px] lg:py-3 lg:px-5 ">
        {thumbnails.map((image, index) => (
          <img 
            className='max-w-[84px] lg:w-full h-[106px] lg:max-w-[100px] lg:h-[100px] object-cover object-center lg:rounded-[15px] cursor-pointer'
            key={index}
            src={image}
            alt=""
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

