import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full bg-slate-200">
      <div className="mx-auto max-w-5xl ">
        <nav className="flex items-center gap-3 text-base">
          <h2 className="p-2 font-semibold text-lg text">Cabo</h2>
          <div className="flex-1"></div>
          <div className="gap-6 inline-flex p-2 ">
            <Link to="/menu">Menu</Link>
            <Link to="/home">About</Link>
            <div>Contact</div>
          </div>
          <div className="flex-1"></div>
          <div className="gap-6 inline-flex p-2 ">
            <div>Menu</div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
