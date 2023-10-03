import React, { useState } from "react";
import "./ImageGallery.css";

type ImageGalleryProps = {
  images: string[];
};

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [imgPlayingIndex, setImgPlayingIndex] = useState(0);
  return (
    <div className="image-gallery">
      <img src={images[imgPlayingIndex]} alt="" />
      <div className="thumbnails">
        {images.map((imgUrl, index) => (
          <img
            key={index}
            src={imgUrl}
            alt=""
            onClick={() => setImgPlayingIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
