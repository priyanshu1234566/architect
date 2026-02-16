import React, { useState, useEffect } from "react";
import "../styles/Home.css";

import banner1 from "../assests/ban 1.jpg";
import banner2 from "../assests/ban 2.jpg";
import banner3 from "../assests/ban 3.jpg";


const Home = () => {
  const banners = [banner1, banner2, banner3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 4000); // Change slide every 4 seconds
    return () => clearInterval(interval);
  }, [isAutoPlaying, banners.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <section className="home" id="home">
      <div className="slider-container">
        <div
          className="slider"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {banners.map((banner, index) => (
            <div key={index} className="slide">
              <img
                src={banner}
                alt={`Banner ${index + 1}`}
                loading="lazy" // Lazy load for performance
              />
            </div>
          ))}
        </div>
        {/* Navigation Buttons */}
        <button className="nav-btn prev" onClick={prevSlide} aria-label="Previous slide">
          &#10094;
        </button>
        <button className="nav-btn next" onClick={nextSlide} aria-label="Next slide">
          &#10095;
        </button>
        {/* Indicators */}
        <div className="indicators">
          {banners.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        {/* Auto-play Toggle */}
        <button className="autoplay-toggle" onClick={toggleAutoPlay}>
          {isAutoPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </section>
  );
};

export default Home;