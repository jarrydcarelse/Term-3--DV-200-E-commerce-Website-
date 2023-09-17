// SneakerCarousel.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const SneakerCarousel = () => {
  return (
    <div className="sneaker-carousel">
      <Carousel
        showArrows={true} // Display navigation arrows
        showStatus={false} // Hide status indicators
        showThumbs={false} // Hide thumbnail images
        infiniteLoop={true} // Enable infinite scrolling
        centerMode={false} // Disable center mode
        emulateTouch={true} // Enable touch gestures
        selectedItem={0} // Initially selected item (adjust as needed)
      >
        {/* Add your sneaker images and details here */}
        <div className="sneaker-item">
          <img src="/sneaker1.jpg" alt="Sneaker 1" />
          <p>Sneaker 1 Name</p>
        </div>
        <div className="sneaker-item">
          <img src="/sneaker2.jpg" alt="Sneaker 2" />
          <p>Sneaker 2 Name</p>
        </div>
        {/* Add more sneaker items as needed */}
      </Carousel>
    </div>
  );
};

export default SneakerCarousel;
