import React from "react";

function FooterItem({ Links, title }) {
  return (
    <ul>
      <h1 className="font-semibold mb-1">{title}</h1>
      {Links.map((link) => {
        <li key={link.name}>
          <a href="#">{link.name}</a>
        </li>;
      })}
    </ul>
  );
}

export default FooterItem;
