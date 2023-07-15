import React, { useState } from "react";
import { Link } from "react-router-dom";

import { GrMenu, GrClose } from "react-icons/gr";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Header() {
  const [isOpen, setOpen] = useState(false);
  const [cartIsOpen, setCartOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const cartToggle = () => {
    setCartOpen(!cartIsOpen);
  };

  return (
    <header className="w-full bg-slate-200">
      <div className="mx-auto max-w-5xl ">
        <nav className="flex items-center gap-3 text-base">
          <h2 className="ml-4 md:ml-0 font-semibold text-lg">Cabo</h2>
          <div className="flex-1"></div>
          <div className="gap-6 p-2 hidden md:flex ">
            <Link to="/menu" className="Links">
              Menu
            </Link>
            <Link to="/home">About</Link>
            <div>Contact</div>
          </div>
          <div className="flex-1"></div>
          <div className="gap-6 inline-flex p-2 mr-4 md:mr-0">
            <AiOutlineShoppingCart
              size={24}
              className="m-auto cursor-pointer"
              onClick={cartToggle}
            />
            <GrMenu
              className="m-auto cursor-pointer md:hidden"
              size={24}
              onClick={toggleMenu}
            />
          </div>
        </nav>
      </div>

      <div
        className={`fixed w-full h-full flex justify-center items-center text-[4rem] tracking-wide bg-gray-700 text-white overflow-hidden origin-left duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul>
          <li>
            <Link to="/menu" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/menu" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/menu" onClick={toggleMenu}>
              About
            </Link>
          </li>
        </ul>
      </div>

      <div
        className={`fixed h-full w-[60%] md:w-1/4 bg-slate-600 flex origin-right duration-500 end-0 ${
          cartIsOpen ? "translate-x-0" : "translate-x-full"
        }`}
      ></div>
    </header>
  );
}

export default Header;
