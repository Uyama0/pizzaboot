import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

import { pizzas } from "../assets/data/MenuPage.js";
import CategoriesList from "./CategoriesList.jsx";

function MenuList() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (selectedCategory === "all") {
      setSearchResults(pizzas);
    } else {
      const filteredPizzas = pizzas.filter(
        (pizza) => pizza.category === selectedCategory
      );
      setSearchResults(filteredPizzas);
    }
  }, [selectedCategory]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="mx-auto max-w-6xl">
      {/* Categories */}
      <CategoriesList onSelectCategory={handleCategorySelect} />
      {/* Product list */}
      <div className="flex flex-wrap text-red-600 ">
        {searchResults.map((item) => (
          <Link
            to={`/home/${item.id}`}
            className="w-full h-[60vh] rounder-lg sm:w-1/2 lg:w-1/3 p-4 border border-red-200 "
            key={item.id}
          >
            {item.img && (
              <div className="h-[80%] relative -z-10 ">
                <img
                  src={item.img}
                  alt=""
                  className="object-contain h-full w-full"
                ></img>
                <div className="flex items-center justify-between font-bold">
                  <h1>{item.title}</h1>
                </div>
                <div className="flex">
                  <h1>${item.price}</h1>
                  <button className="text-white bg-red-500 p-2 rounded-md hover:bg-sky-700">
                    order
                  </button>
                </div>
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MenuList;
