import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { addToCart } from "../../redux/reducers/cartSlice";

function ProductList({ searchResults }) {
  const [selectedSize, setSelectedSize] = useState({});
  const [selectedOption, setSelectedOption] = useState({});

  const dispatch = useDispatch();

  const handleSizeChange = (itemId, size) => {
    setSelectedSize({ ...selectedSize, [itemId]: size });
  };

  const handleOptionChange = (itemId, option) => {
    setSelectedOption({ ...selectedOption, [itemId]: option });
  };

  useEffect(() => {
    const defaultSize = "medium";
    const defaultOption = "traditional";

    const defaultSelectedSize = {};
    const defaultSelectedOption = {};

    searchResults.forEach((item) => {
      defaultSelectedSize[item.id] = defaultSize;
      defaultSelectedOption[item.id] = defaultOption;
    });

    setSelectedSize(defaultSelectedSize);
    setSelectedOption(defaultSelectedOption);
  }, [searchResults]);

  const calculateTotalPrice = (item) => {
    const selectedSizeValue = selectedSize[item.id];
    const selectedOptionValue = selectedOption[item.id];

    const basePrice = item.sizes[selectedSizeValue];
    const optionPrice = item.options[selectedOptionValue];

    if (basePrice && optionPrice) {
      return basePrice + optionPrice;
    }

    return 0;
  };

  const handleAddToCart = (item) => {
    const selectedSizeValue = selectedSize[item.id];
    const selectedOptionValue = selectedOption[item.id];

    const itemToAdd = {
      ...item,
      selectedSize: selectedSizeValue,
      selectedOption: selectedOptionValue,
      totalPrice: calculateTotalPrice(item),
    };

    dispatch(addToCart(itemToAdd));
  };

  return (
    <div
      
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      {searchResults.map((item) => (
        <div
          className=" rounded-lg border-2 border-gray mx-2 md:mx-0 transform overflow-hidden"
          key={item.id}
        >
          {item.img && (
            <div>
              <img
                src={item.img}
                alt=""
                className="object-cover object-center-full"
              ></img>
              <h1 className="flex justify-center text-xl my-2">{item.title}</h1>
            </div>
          )}
          <div className="rounded-lg bg-gray flex-col m-2">
            <div className="flex justify-around gap-1 p-1">
              <button
                className={`${
                  selectedSize[item.id] === "small" ? "bg-black text-white" : ""
                } w-1/3 py-2 rounded-lg`}
                onClick={() => handleSizeChange(item.id, "small")}
              >
                Small
              </button>
              <button
                className={`${
                  selectedSize[item.id] === "medium"
                    ? "bg-black text-white"
                    : ""
                } w-1/3 py-2 rounded-lg`}
                onClick={() => handleSizeChange(item.id, "medium")}
              >
                Medium
              </button>
              <button
                className={`${
                  selectedSize[item.id] === "large" ? "bg-black text-white" : ""
                } w-1/3 py-2 rounded-lg`}
                onClick={() => handleSizeChange(item.id, "large")}
              >
                Large
              </button>
            </div>
            <div className="flex-row flex justify-around gap-1 p-1">
              <button
                className={`${
                  selectedOption[item.id] === "traditional" ? "bg-black " : ""
                } w-1/2  rounded-lg`}
                onClick={() => handleOptionChange(item.id, "traditional")}
              >
                Traditional
              </button>
              <button
                className={`${
                  selectedOption[item.id] === "thick"
                    ? "bg-black text-white"
                    : ""
                } w-1/2 py-2 rounded-lg`}
                onClick={() => handleOptionChange(item.id, "thick")}
              >
                Thick
              </button>
            </div>
          </div>
          <div className="flex justify-between p-2">
            <h1 className="flex items-center">
              Price: ${calculateTotalPrice(item).toFixed(2)}
            </h1>
            <button
              onClick={() => handleAddToCart(item)}
              className="text-black bg-white p-2 rounded-lg hover:bg-mutedwhite"
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
