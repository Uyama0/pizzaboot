import React from "react";

function About() {
  return (
    <div className="flex flex-col h-[calc(100vh-40px)] w-full bg-pink-300 md:flex-row justify-center">
      <div className="lg:w-1/2 text-center text-white font-bold">
        <h1 className="uppercase text-6xl my-5">about us</h1>
        <p className="text-4xl ">
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
