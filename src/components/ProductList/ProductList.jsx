import React, { useState } from "react";
import { Link } from "react-router-dom";

function ProductList({ searchResults }) {
  const [selectedSize, setSelectedSize] = useState("medium");
  const [selectedOption, setSelectedOption] = useState("traditional");
  const [buttonStyles, setButtonStyles] = useState({
    small: false,
    medium: true,
    large: false,
  });
  const [buttonStyless, setButtonStyless] = useState({
    traditional: true,
    thick: false,
  });

  const handleSizeChange = (size) => {
    setSelectedSize(size);

    setButtonStyles({
      small: size === "small",
      medium: size === "medium",
      large: size === "large",
    });
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);

    setButtonStyless({
      traditional: option === "traditional",
      thick: option === "thick",
    });
  };

  return (
    <div className="flex flex-wrap text-red-600">
      {searchResults.map((item) => (
        <div
          // to={`/home/${item.id}`}
          className="w-full h-[60vh] rounded-xl sm:w-1/2 lg:w-1/3 p-4 border border-red-200 "
          key={item.id}
        >
          {item.img && (
            <div className="h-[60%] relative -z-10">
              <img
                src={item.img}
                alt=""
                className="object-contain h-full w-full"
              ></img>
              <h1 className="flex justify-center font-bold text-xl w-full">
                {item.title}
              </h1>
            </div>
          )}
          <div className="w-full rounded-xl flex-col text-lg bg-gray-100">
            <div className="flex flex-row justify-around gap-1 p-1">
              <button
                className={`${
                  buttonStyles.small ? "bg-black text-white" : ""
                } w-1/3 py-2 rounded-md`}
                onClick={() => handleSizeChange("small")}
              >
                Small
              </button>
              <button
                className={`${
                  buttonStyles.medium ? "bg-black text-white" : ""
                } w-1/3 py-2 rounded-md`}
                onClick={() => handleSizeChange("medium")}
              >
                Medium
              </button>
              <button
                className={`${
                  buttonStyles.large ? "bg-black text-white" : ""
                } w-1/3 py-2 rounded-md`}
                onClick={() => handleSizeChange("large")}
              >
                Large
              </button>
            </div>
            <div className="flex-row flex justify-around gap-1 p-1">
              <button
                className={`${
                  buttonStyless.traditional ? "bg-black" : ""
                } w-1/2  rounded-md`}
                onClick={() => handleOptionChange("traditional")}
              >
                Traditional
              </button>
              <button
                className={`${
                  buttonStyless.thick ? "bg-black text-white" : ""
                } w-1/2 py-2 rounded-md`}
                onClick={() => handleOptionChange("thick")}
              >
                Thick
              </button>
            </div>
          </div>
          <div className="flex justify-between px-5">
            <h1 className="flex items-center">
              Price: ${item.prices[selectedSize] + item.options[selectedOption]}
            </h1>
            <button
              onClick={() => addToCart(item, selectedSize, selectedOption)}
              className="text-white bg-red-500 p-2 rounded-md hover:bg-sky-700"
            >
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
