import React from "react";

import { footerData } from "./../../assets/data/footerData";

import FooterContainer from "./FooterContainer";

function Footer() {
  return (
    <footer className="mx-auto max-w-6xl mt-10 ">
      <h1 className="uppercase font-bold tracking-wide text-xl mb-4">
        Pizza boot
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {footerData.map((column, columnIndex) => (
          <div key={columnIndex}>
            <h2 className="text-xl mb-4">{column.title}</h2>
            <ul>
              {column.links.map((link, linkIndex) => (
                <li key={linkIndex} className="py-1 ">
                  <a
                    href={link.url}
                    className="hover:text-white text-mutedgray"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
    // <footer className="mx-auto max-w-6xl mt-10">
    //   <h1 className="uppercase font-bold tracking-wide text-xl">Pizza boot</h1>
    //   <FooterContainer />
    // </footer>
  );
}

export default Footer;
