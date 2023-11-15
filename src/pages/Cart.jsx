import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { removeFromCart } from "../redux/reducers/cartSlice.js";
import { current } from "@reduxjs/toolkit";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const total = cartItems.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.totalPrice;
  }, 0);

  console.log("Содержимое корзины:", cartItems);
  console.log("Содержимое корзины:", total);

  return (
    <div className="mx-auto max-w-6xl">
      <h1 className="text-2xl my-6 text-center md:text-left font-bold">
        Your cart
      </h1>
      <div className="md:grid grid-cols-3 gap-4 mx-2 md:mx-0 ">
        <div className="col-span-2 border-gray border-2 rounded-lg">
          {cartItems && cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                className="flex text-mutedwhite p-3 justify-between "
                key={item.id}
              >
                <img
                  src={item.img}
                  alt="product"
                  className="object-cover max-h-20 flex rounded-lg"
                />
                <div className="flex flex-col flex-grow mx-4 justify-around">
                  <h1 className="text-white">{item.title}</h1>
                  <p>{item.category}</p>
                </div>
                <button
                  className="underline"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Delete
                </button>
                <h1 className="flex justify-center ml-4 items-center">
                  {item.totalPrice}
                </h1>
              </div>
            ))
          ) : (
            <div className="justify-center items-center flex flex-col h-full gap-3 my-10 md:my-0">
              <h1 className="text-3xl">Your cart is empty.</h1>
              <Link to="/home">
                <button className="border-2 text-xl p-2 rounded-lg hover:bg-gray">
                  Check out our menu
                </button>
              </Link>
            </div>
          )}
        </div>
        <div className="border-gray border-2 rounded-lg flex flex-col p-2 gap-2 max-h-96 ">
          <div className="border-white p-2 border-2 rounded-lg">
            <div className="flex justify-between">
              <h1 className="font-bold">Order</h1>
              <button className="text-mutedwhite">change</button>
            </div>
            <p className="text-mutedwhite">current nowhere</p>
          </div>
          <div className="border-white p-2 border-2 rounded-lg h-96 flex flex-col">
            <h1 className="font-bold flex-1">Your order</h1>
            <p></p>
            <div className="flex justify-between">
              <h1>{`Total price ->`}</h1>
              <p>wdq</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
