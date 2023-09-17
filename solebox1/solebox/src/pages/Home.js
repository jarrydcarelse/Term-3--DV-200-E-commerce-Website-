import React from 'react';
import Slider from '../components/Slider'; // Import your Slider component
import SneakersOfTheWeek from '../components/SneakersOfTheWeek'; // Import the SneakersOfTheWeek component
const Home = () => {
    const images = [
        '/slider 1.jpeg',
        '/slider 2.jpeg',
        '/slider 3.jpeg',
      ];
  return (
    <div className="home-container">
      {/* Slider Section */}
      <Slider images={images} />
      <br></br>

      {/* About Section */}
      <section className="about-section">
        <h2>About Us</h2>
        <p>About SoleBox
At SoleBox, we are passionate about sneakers. We understand that sneakers are more than just footwear; they are a form of self-expression, a symbol of style, and a reflection of individuality. That's why we've dedicated ourselves to curating the finest selection of high-end and in-demand sneakers for sneaker enthusiasts, collectors, and trendsetters like you.
<br></br><br></br>
Our Story
SoleBox was born out of a shared love for sneakers and a desire to provide an unparalleled shopping experience. Our journey began with a simple idea: to connect sneaker aficionados with the most coveted footwear from around the world. Today, we've grown into a trusted destination for premium sneakers, where authenticity and quality meet style and exclusivity.
<br></br><br></br>
Our Commitment
SoleBox is committed to providing an exceptional shopping experience that goes beyond the transaction. We are dedicated to the sneaker culture and lifestyle, and we're excited to share our passion with you. Whether you're a long-time collector or new to the world of sneakers, SoleBox is your trusted partner in the pursuit of style and self-expression.
Thank you for choosing SoleBox as your destination for high-end sneakers. Explore our collection, find your next favourite pair, and step into a world of limitless sneaker possibilities.
Welcome to SoleBox—where sneakers meet style, and style meets you.
</p>
<br></br>
<SneakersOfTheWeek />
<br></br><br></br>
      </section>

      
    </div>
  );
};

export default Home;


