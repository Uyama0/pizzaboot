import React from "react";

function About() {
  return (
    <div className="flex flex-col h-[calc(100vh-40px)] w-full bg-pink-300 md:flex-row justify-center">
      {/* <div className="text-7xl flex-col font-bold text-white w-full md:h-full flex items-start justify-center h-1/2">
        ABOUT US
      </div>
      <div className="text-white text-4xl w-full h-1/2 flex items-center md:h-full">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem amet
        quasi corrupti cum ipsum sunt ducimus eligendi nulla, esse temporibus.
      </div> */}
      <div className="flex flex-col lg:w-1/2 items-center text-white font-bold">
        <h1 className="uppercase p-12 text-6xl">about us</h1>
        <p className="text-4xl p-12">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure fugit
          dolores animi obcaecati vel, sed possimus sapiente corrupti dolorem
          magni harum alias sit, voluptates nesciunt corporis doloremque, non
          quia voluptatibus.
        </p>
      </div>
    </div>
  );
}

export default About;
