import React, { useState, useEffect, useCallback } from "react";
import "../styles/Home.css";

import banner1 from "../assests/ban 1.jpg";
import banner2 from "../assests/ban 2.jpg";
import banner3 from "../assests/ban 3.jpg";

const Home = () => {
  const banners = [banner1, banner2, banner3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  }, [banners.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section className="home" id="home">
      <div className="slider-container">
        <div
          className="slider"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {banners.map((banner, index) => (
            <div key={index} className="slide">
              <img src={banner} alt={`Banner ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>

        <button className="nav-btn prev" onClick={prevSlide}>❮</button>
        <button className="nav-btn next" onClick={nextSlide}>❯</button>

        <div className="indicators">
          {banners.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        <button className="autoplay-toggle" onClick={() => setIsAutoPlaying(!isAutoPlaying)}>
          {isAutoPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </section>
  );
};

export default Home;