import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { GrMenu, GrClose } from "react-icons/gr";
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
    // <header className="w-full bg-opacity-50 backdrop-blur-md border-b border-gray sticky top-0 py-2 z-10">
    <header className="w-full sticky top-0 z-10">
      <div
        className={`bg-gray-700 py-2 backdrop-blur-md ${
          isOpen ? "backdrop-filter backdrop-blur-md" : ""
        }`}
      >
        <div className="mx-auto max-w-6xl relative">
          <nav className="flex items-center gap-3 text-base">
            <h2 className="ml-4 md:ml-0 font-semibold text-lg">Pizza boot</h2>
            <div className="flex-1"></div>
            <div className="gap-6 p-2 hidden md:flex ">
              <Link to="/home">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/home">Contact</Link>
            </div>
            <div className="flex-1"></div>
            <div className="gap-6 inline-flex p-2 mr-4 md:mr-0">
              <Link to="cart" className="flex gap-2">
                <div>{cartItems.length}</div>
                <AiOutlineShoppingCart
                  size={24}
                  className="m-auto cursor-pointer"
                  onClick={cartToggle}
                />
              </Link>
              <GrMenu
                color="white"
                className="m-auto cursor-pointer md:hidden"
                size={24}
                onClick={toggleMenu}
              />
            </div>
          </nav>
        </div>
      </div>

      <div
        className={`fixed w-full h-full  flex justify-center items-center text-[4rem] tracking-wide bg-gray-700 bg-black text-white overflow-hidden origin-left duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul>
          <li>
            <Link to="/home" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/menu" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* <div
      className={`fixed h-full w-[60%] md:w-1/4 bg-slate-600 flex origin-right duration-500 end-0 ${
        cartIsOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="w-full text-white flex flex-col h-full">
        <div className="text-2xl flex justify-center p-4 ">
          Your purchases
        </div>
        <ul>
          <li>Lorem do something here</li>
        </ul>
        <div className="flex-1"></div>
        <div>
          <p>Total price: </p>
        </div>
      </div>
    </div> */}
    </header>
  );
}

export default Header;
