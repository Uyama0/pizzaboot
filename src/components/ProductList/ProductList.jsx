import React from "react";
import { Link } from "react-router-dom";

function ProductList({ searchResults }) {
  return (
    <div className="flex flex-wrap text-red-600 ">
      {searchResults.map((item) => (
        <Link
          to={`/home/${item.id}`}
          className="w-full h-[60vh] rounded-xl sm:w-1/2 lg:w-1/3 p-4 border border-red-200 "
          key={item.id}
        >
          {item.img && (
            <div className="h-[80%] relative -z-10">
              <img
                src={item.img}
                alt=""
                className="object-contain h-full w-full"
              ></img>
              <h1 className="flex justify-center font-bold text-xl w-full">
                {item.title}
              </h1>
              <div className="flex justify-between px-5">
                <h1 className="flex items-center">${item.price}</h1>
                <button className="text-white bg-red-500 p-2 rounded-md hover:bg-sky-700">
                  order
                </button>
              </div>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
}

export default ProductList;
