import React from "react";

function About() {
  return (
    <div className="flex flex-col w-full bg-black md:flex-row justify-center">
      <div className="lg:w-1/2 text-center text-white font-bold flex flex-col gap-3">
        <div>
          <h1 className="uppercase text-4xl my-5">about us</h1>
          <p className="text-mutedgray">
            Welcome to Pizza Boot - Where Flavor Meets Fast!
          </p>
          <p className="text-mutedgray">
            At Pizza Boot, we're not just delivering pizzas; we're bringing a
            slice of happiness to your doorstep. Established with a passion for
            crafting the perfect pizza experience, we strive to make every bite
            an adventure.
          </p>
        </div>
        <div>
          <h1 className="uppercase text-4xl my-5">Our Story</h1>
          <p className="text-mutedgray">
            Pizza Boot was born out of a simple idea: to create a pizza delivery
            service that not only satisfies your cravings but also delivers an
            exceptional culinary experience. We believe that great pizza is more
            than just a meal; it's a moment to be cherished.
          </p>
        </div>
        <div>
          <h1 className="uppercase text-4xl my-5">The Pizza Boot Difference</h1>
          <h2 className="text-2xl mb-2 underline">Quality Ingredients</h2>
          <p className="text-mutedgray">
            We take pride in using only the finest, freshest ingredients. From
            our hand-tossed dough to our signature sauces and premium toppings,
            every element is carefully selected to ensure a burst of flavor in
            every bite.
          </p>
        </div>
        <div>
          <h2 className="text-2xl mb-2 underline">Speedy Delivery</h2>
          <p className="text-mutedgray">
            Hungry and in a hurry? No problem! Pizza Boot promises swift and
            reliable delivery without compromising on the quality of your pizza.
            We understand that your time is precious, and we're committed to
            getting your pizza to you piping hot and right on time.
          </p>
        </div>
        <div>
          <h2 className="text-2xl mb-2 underline">
            Variety to Please Every Palate
          </h2>
          <p className="text-mutedgray">
            Whether you're a fan of classic Margherita or crave adventurous
            toppings, Pizza Boot has a pizza for everyone. Our diverse menu
            caters to different tastes and preferences, ensuring there's
            something delightful for every pizza lover.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
