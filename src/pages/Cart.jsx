import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { removeFromCart } from "../redux/reducers/cartSlice.js";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  console.log("Содержимое корзины:", cartItems);

  return (
    <div className="mx-auto max-w-6xl">
      <h1 className="text-2xl my-6">Your cart</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 border-gray border-2 rounded-lg">
          {cartItems &&
            cartItems.map((item, index) => (
              <div className="flex p-3 justify-between" key={index}>
                <img
                  src={item.img}
                  alt="product"
                  className="object-cover max-h-20 flex"
                />
                <div className="flex flex-col justify-around">
                  <p>{item.title}</p>
                  <p>{item.category}</p>
                </div>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  Delete
                </button>
                <h1>{item.totalPrice}</h1>
              </div>
            ))}
        </div>
        <div className="border-gray border-2 rounded-lg flex flex-col p-2 gap-2">
          <div className="border-white p-2 border-2 rounded-lg">вф</div>
          <div className="border-white p-2 border-2 rounded-lg">
            <h1>Your order</h1>
            <p></p>
            <div className="flex justify-between">
              <h1>Total price</h1>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
