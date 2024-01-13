import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Header() {
  const [isOpen, setOpen] = useState(false);
  const [cartIsOpen, setCartOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
    setCartOpen(false);
  };

  const cartToggle = () => {
    setCartOpen(!cartIsOpen);
    setOpen(false);
  };

  const cartItems = useSelector((state) => state.cart.items);

  return (
    <header className="w-full sticky top-0 z-10">
      <div
        className={`bg-gray-700 py-2 backdrop-blur-md ${
          isOpen ? "backdrop-filter backdrop-blur-md" : ""
        }`}
      >
        <div className="mx-auto max-w-6xl relative">
          <nav className="flex items-center text-base justify-between">
            <h2 className="ml-4 md:ml-0 font-semibold text-lg">Pizzaboot</h2>
            <div className="gap-6 p-2 hidden md:flex ">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className="gap-6 inline-flex p-2 mr-4 md:mr-0 md:w-[90px]">
              <Link to="cart" className="flex gap-2">
                <div>{cartItems.length}</div>
                <AiOutlineShoppingCart
                  size={24}
                  className="m-auto cursor-pointer"
                  onClick={cartToggle}
                />
              </Link>
              <GiHamburgerMenu
                className="m-auto cursor-pointer md:hidden"
                size={24}
                onClick={toggleMenu}
              />
            </div>
          </nav>
        </div>
      </div>

      <div
        className={`fixed w-full h-full flex justify-center items-center text-[4rem] tracking-wide bg-gray-700 bg-black text-white overflow-hidden origin-left duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul>
          <li>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
