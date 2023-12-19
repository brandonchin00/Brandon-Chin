import React, { useState } from "react";

const ImageSlider = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const goToPreviousSlide = () => {
    const newIndex = (activeIndex - 1 + images.length) % images.length;
    setActiveIndex(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = (activeIndex + 1) % images.length;
    setActiveIndex(newIndex);
  };

  return (
    <div>
      <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
        <div
          style={{
            display: "flex",
            transition: "transform 0.5s ease",
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={` ${index}`}
              style={{ width: "100%", flex: "0 0 100%" }}
            />
          ))}
        </div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        {activeIndex !== 0 && (
          <button onClick={goToPreviousSlide}>Previous</button>
        )}
        {activeIndex !== images.length - 1 && (
          <button onClick={goToNextSlide}>Next</button>
        )}
      </div>
    </div>
  );
};

export default ImageSlider;
