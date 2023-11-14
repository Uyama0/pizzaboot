import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="justify-center items-center flex h-[calc(100vh-56px)]">
      <div className="items-center gap-5 uppercase font-bold flex flex-col">
        <h1 className="text-9xl">404</h1>
        <p className="text-3xl md:text-4xl text-center">
          Your've reached the edge.
        </p>
        <button className="bg-white text-black hover:bg-mutedwhite uppercase border-2 p-4 text-2xl rounded-lg">
          <Link to="/home">return home</Link>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
