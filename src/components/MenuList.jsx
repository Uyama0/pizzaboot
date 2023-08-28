import React, { useEffect, useState } from "react";

import { pizzas } from "../assets/data/MenuPage.js";
import CategoriesList from "./CategoriesList.jsx";
import ProductList from "./ProductList/ProductList.jsx";

function MenuList() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchResults, setSearchResults] = useState([]);
  const [cartItems, setCartItems] = useState([]);

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

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

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
