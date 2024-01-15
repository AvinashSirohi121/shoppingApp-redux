import React from "react";
import Navbar from "../components/NavBar";
import CartPage from "../components/CartPage";
import NavBar from "../components/NavBar";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  return (
    <div>
      <NavBar />
      <CartPage />
    </div>
  );
};

export default Cart;
