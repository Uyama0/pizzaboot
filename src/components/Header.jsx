import React, { useState } from "react";
import { Link } from "react-router-dom";

import { GrMenu, GrClose } from "react-icons/gr";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Header() {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
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
            <AiOutlineShoppingCart size={24} className="m-auto" />
            <GrMenu
              className="m-auto cursor-pointer md:hidden"
              size={24}
              onClick={setOpen}
            />
          </div>
        </nav>
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className=" w-full bg-white shadow-lg ">
            <div className="flex justify-end">
              <button type="button" className="p-2" onClick={toggleMenu}>
                <GrClose className="h-6 w-6 text-gray-700" aria-hidden="true" />
              </button>
            </div>
            <div className="px-4 py-6">
              <Link to="/menu">Menu</Link>

              <a
                href="#"
                className="block text-gray-800 text-lg font-semibold mb-4"
              >
                About
              </a>
              <a
                href="#"
                className="block text-gray-800 text-lg font-semibold mb-4"
              >
                Services
              </a>
              {/* Add more menu items as needed */}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
