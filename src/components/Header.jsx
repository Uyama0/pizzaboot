import React from "react";
import { Link } from "react-router-dom";

import { GrMenu } from "react-icons/gr";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Header() {
  return (
    <header className="w-full bg-slate-200">
      <div className="mx-auto max-w-5xl ">
        <nav className="flex items-center gap-3 text-base">
          <h2 className="ml-4 md:ml-0 font-semibold text-lg">Cabo</h2>
          <div className="flex-1"></div>
          <div className="gap-6 p-2 hidden md:flex ">
            <Link to="/menu">Menu</Link>
            <Link to="/home">About</Link>
            <div>Contact</div>
          </div>
          <div className="flex-1"></div>
          <div className="gap-6 inline-flex p-2 mr-4 md:mr-0">
            <AiOutlineShoppingCart size={20} className="m-auto " />
            <GrMenu className="m-auto  md:hidden" />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
