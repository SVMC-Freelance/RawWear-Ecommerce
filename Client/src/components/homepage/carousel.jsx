import React, { useState, useEffect } from "react";
import SignIn from '../../assets/auth/signin.svg';

const images = [
  "https://via.placeholder.com/800x400?text=Slide+1",
  "https://via.placeholder.com/800x400?text=Slide+2",
  "https://via.placeholder.com/800x400?text=Slide+3",
];

const carousel = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="relative w-full  mx-auto overflow-hidden rounded-lg shadow-lg h-72 border-4 ">
      {/* Slides Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={SignIn}
            alt={`Slide ${index + 1}`}
            className="w-full shrink-0 object-cover"
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-60 hover:bg-opacity-90 text-gray-800 px-3 py-2 rounded-r"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-60 hover:bg-opacity-90 text-gray-800 px-3 py-2 rounded-l"
      >
        &#10095;
      </button>
    </div>
  );
};

export default carousel;
