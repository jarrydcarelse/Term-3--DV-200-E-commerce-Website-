import React, { useState, useEffect } from 'react';


const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Automatically switch to the next image
      const newIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(newIndex);
    }, 3000); // Change image every 5 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <div className="slider-container">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="slider-image"
      />
    </div>
  );
};

export default Slider;
