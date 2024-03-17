// Converts image from base64 to jpeg

function ImgBase64({ data, alt, ...props }) {
  return (
    <img
      {...props}
      src={`data:image/jpeg;base64,${data}`}
      alt={alt}
      width="400"
      height="300"
    />
  );
}

export default ImgBase64;
