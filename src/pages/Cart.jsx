import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { removeFromCart } from "../redux/reducers/cartSlice.js";
import { current } from "@reduxjs/toolkit";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // const calculateBillTotalPrice = (cartItems) => {
  //   let billTotalPrice = cartItems.reduce(
  //     (prevItem, currentItem) => prevItem.totalPrice + currentItem.totalPrice
  //   );
  //   return billTotalPrice;
  // };
  console.log("Содержимое корзины:", cartItems);
  // console.log("Содержимое корзины:", billTotalPrice);

  return (
    <div className="mx-auto max-w-6xl">
      <h1 className="text-2xl my-6">Your cart</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 border-gray border-2 rounded-lg">
          {cartItems &&
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
            ))}
        </div>
        <div className="border-gray border-2 rounded-lg flex flex-col p-2 gap-2 relative max-h-96">
          <div className="border-white p-2 border-2 rounded-lg">
            <div className="flex justify-between">
              <h1 className="font-bold">Order</h1>
              <button className="text-mutedwhite">change</button>
            </div>
            <p className="text-mutedwhite">current nowhere</p>
          </div>
          <div className="border-white p-2 border-2 rounded-lg flex-1">
            <h1 className="font-bold">Your order</h1>
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
