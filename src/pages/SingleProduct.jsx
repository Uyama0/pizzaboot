import React from "react";
import { useParams } from "react-router-dom";

import { pizzas } from "../assets/data/MenuPage.js";

function SingleProduct() {
  const { id } = useParams();
  const product = pizzas.find((pizza) => pizza.id == id);
  const { img, title, price, description } = product;

  return (
    // <div className="p-4 h-[calc(100vh-40px)] flex flex-col justify-around">
    //   <div className="relative -z-10">
    //     {img && (
    //       <img src={img} alt={title} className="object-contain w-full h-1/2" />
    //     )}
    //     <div>
    //       <h1>{title}</h1>
    //       <p>{description}</p>
    //     </div>
    //   </div>
    // </div>
    <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-40px)] flex flex-col justify-around text-red-500 md:flex-row md:gap-8 md:items-center">
      {img && (
        <div className="relative w-full h-1/2 md:h-[70%] -z-10">
          <img src={img} alt={title} className="object-contain h-full w-full" />
        </div>
      )}
      <div className="h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
        <h1 className="text-3xl font-bold uppercase xl:text-5xl">{title}</h1>
        <p>{description}</p>
        <button className="border-solid border-2 rounded-md p-3 border-red-700 hover:bg-red-200">
          ORDER
        </button>
      </div>
    </div>
  );
}

export default SingleProduct;
