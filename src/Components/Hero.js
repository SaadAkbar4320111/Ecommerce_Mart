import { useState, useEffect } from "react";
import pic1 from './assets/pic1.jpeg';
import pic2 from './assets/pic2.jpeg';

function Hero() {
  const images = [pic1, pic2];

  const [current, setCurrent] = useState(0);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  // Auto-play every 12 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">

      {/* LEFT SIDE - TEXT */}
      <div className="hero-text">
        <h1>Get Excited Summer Deal</h1>
        <p>Choose your deal and enjoy massive discounts this summer.</p>

        <button className="hero-btn"
        onClick={() => {
        document.getElementById("products").scrollIntoView({
        behavior: "smooth",
        });
    }}>
      Shop Now</button>
      </div>

      {/* RIGHT SIDE - IMAGE SLIDER */}
      <div className="hero-image">

        <button className="arrow left" onClick={prevImage}>
          ‹
        </button>

        <img
          src={images[current]}
          alt="Hero Banner"
          className="hero-img"
        />

        <button className="arrow right" onClick={nextImage}>
          ›
        </button>

      </div>

    </div>
  );
}

export default Hero;