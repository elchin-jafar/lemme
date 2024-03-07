// Converts image from base64 to jpeg

function ImgBase64({ data, alt }) {
  return (
    <img
      className="w-[48rem] h-[66rem] rounded-[8rem]"
      src={`data:image/jpeg;base64,${data}`}
      alt={alt}
    />
  );
}

export default ImgBase64;
