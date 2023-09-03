import React from "react";

import { pizzas } from "../assets/data/MenuPage.js";

function Cart() {
  return (
    <div className="flex flex-col gap-3 border-2 m-3">
      <h1 className="text-center text-2xl">Your cart</h1>
      {pizzas.map((item) => (
        <div key={item.id} className="flex w-full border-2 h-20">
          <div className="flex justify-between">
            {item.img && (
              <div>
                <img src={item.img} alt="pizza here" className="h-full" />
              </div>
            )}
            <section className="flex flex-col justify-center">
              <h1>{item.title}</h1>
              <p>{item.category}</p>
            </section>
            <div className="flex items-center">{item.prices.small}</div>

            <button>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
