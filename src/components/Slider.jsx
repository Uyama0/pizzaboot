import React, { useEffect, useState } from "react";
import sliderData from "../assets/data/sliderData.js";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState({ image: 0 });

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => ({
      image: (prevSlide.image + 1) % sliderData.length,
    }));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col h-[calc(100vh-40px)] lg:h-[calc(100vh-40px)] lg:flex-row ">
      <div className="h-1/2 lg:h-auto lg:w-1/2 flex items-center bg-black gap-6 justify-center font-bold flex-col text-white">
        <h1 className="text-5xl p-4 uppercase text-center">
          Explore <p>Products</p>
        </h1>
        <a href="#productList"><button className="bg-white text-black p-4 px-10 uppercase">
          Get in touch
        </button></a>
      </div>
      <div className="w-full h-1/2 lg:w-1/2 relative lg:h-full -z-10">
        <img
          src={sliderData[currentSlide.image].image}
          alt="slide here"
          className="h-full w-full object-cover "
        ></img>
      </div>
    </div>
  );
}

export default Slider;
