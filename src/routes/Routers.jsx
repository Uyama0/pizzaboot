import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Cart from "../pages/Cart";
import SingleProduct from "../pages/SingleProduct";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/home/:id" element={<SingleProduct />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Routers;
