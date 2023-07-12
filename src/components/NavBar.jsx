import React from "react";

function NavBar() {
  return (
    <header className="w-full vg bg-slate-200">
      <div className="mx-auto max-w-5xl ">
        <nav className="flex items-center gap-3 text-base">
          <h2 className="p-2 font-semibold text-lg text">Cabo</h2>
          <div className="flex-1"></div>
          <div className="gap-6 inline-flex p-2 ">
            <div>Menu</div>
            <div>About</div>
            <div>Contact</div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
