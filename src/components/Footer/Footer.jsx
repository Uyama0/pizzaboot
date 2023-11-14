import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import IconsButton from "./../UI/iconsButton/iconsButton";

import { footerData } from "./../../assets/data/footerData";

function Footer() {
  return (
    <footer className="mx-auto max-w-6xl my-10">
      <h1 className="uppercase text-center font-bold tracking-wide text-xl mb-4 md:text-left">
        Pizza boot
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
        {footerData.map((column, columnIndex) => (
          <div key={columnIndex}>
            <h2 className="text-xl mb-4 text-center md:text-left">
              {column.title}
            </h2>
            <ul className="border-b border-mutedgray md:border-none">
              {column.links.map((link, linkIndex) => (
                <li key={linkIndex} className="py-1 text-center md:text-left">
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
        <div className="flex gap-2 items-center justify-center">
          <IconsButton reactIcon={<FaInstagram />} />
          <IconsButton reactIcon={<FaFacebookF />} />
          <IconsButton reactIcon={<FaTwitter />} />
          <IconsButton reactIcon={<FaLinkedin />} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
