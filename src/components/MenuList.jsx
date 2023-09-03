import React, { useEffect, useState } from "react";

import { pizzas } from "../assets/data/MenuPage.js";
import CategoriesList from "./CategoriesList.jsx";
import ProductList from "./ProductList/ProductList.jsx";

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
    <div className="mx-auto max-w-6xl ">
      <CategoriesList onSelectCategory={handleCategorySelect} />
      <ProductList searchResults={searchResults} />
    </div>
  );
}

export default MenuList;
