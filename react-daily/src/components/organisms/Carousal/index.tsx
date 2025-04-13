import React, { useState } from "react";
import './index.css'

type ImageProps = {
  images: { src: string; alt: string }[];
};

const ImageCarousel: React.FC<ImageProps> = ({ images }) => {
  const [index, setIndex] = useState(0);
  const total = images.length;

  const prev = () => setIndex((prev) => (prev - 1 + total) % total);
  const next = () => setIndex((prev) => (prev + 1) % total);

  return (
    <div className="carousel-container">
      <div className="carousel">
        <button className="nav-button left" onClick={prev}>
          ❮
        </button>

        <img
          src={images[index].src}
          alt={images[index].alt}
          className="carousel-image"
        />

        <button className="nav-button right" onClick={next}>
          ❯
        </button>

        <div className="dots">
          {images.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
