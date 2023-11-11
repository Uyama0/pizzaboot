import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { removeFromCart } from "../redux/reducers/cartSlice.js";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  console.log("Содержимое корзины:", cartItems);

  return (
    <div className="flex flex-col gap-3 border-2 m-3">
      <h1 className="text-center text-2xl">Your cart</h1>
      {cartItems.map((item, index) => (
        <div key={index} className="flex w-full border-2 h-20">
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
            <div className="flex items-center">{item.totalPrice}</div>
            <button onClick={() => dispatch(removeFromCart(item.id))}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
