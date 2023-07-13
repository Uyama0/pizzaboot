import React from "react";

// import pizza from "../assets/pizza.png";

function Home() {
  return (
    <main>
      <div className="mx-auto max-w-5xl">
        <div className="flex text-center mt-7 h-80 bg-slate-400 md:rounded-2xl">
          <div className="basis-1/2 object-ontain flex">
            <div className="m-auto bg-yellow-50 items-center">
              {/* <img className="w-10" src={pizza} alt="Logo" /> */}
            </div>
          </div>
          <div className="basis-1/2 flex">
            <div className="m-auto w-[50%] ">
              <h1 className="bg-slate-400 font-bold ">Pizza of the mouth</h1>
              <div className="border-4 p-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Incidunt.
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
