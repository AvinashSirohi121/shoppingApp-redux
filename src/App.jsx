import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Product from "./pages/Product"
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
