import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import "../CSS/Navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="innernavbar">
        <div className="left">
          <Link to="/">
            <img
              className="icon"
              alt="icon"
              src="https://assets.materialup.com/uploads/dad3a1cf-babd-4b93-b678-dfcf58fb2f14/preview.jpg"
            />
          </Link>
        </div>
        <div className="right">
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/cart">
            <div className="cart">
              <div className="count">10</div>
              <FaCartShopping className="cartIcon" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
