import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import SingleProduct from "../pages/SingleProduct";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/home/:id" element={<SingleProduct />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default Routers;
