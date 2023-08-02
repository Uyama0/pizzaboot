import React from "react";

function Menu() {
  return (
    <div>
      {pizzas.map((item) => {
        <a href={`/product/${item.id}`} key={item.id}>
          s
        </a>;
      })}
    </div>
  );
}

export default Menu;
