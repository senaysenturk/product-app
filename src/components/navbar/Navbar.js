import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <i className="fa-brands fa-neos"></i>
        <span>NOZAMA</span>
      </div>
      <div className="cart">
        <i className="fa-solid fa-cart-arrow-down"></i>
        <span>Cart</span>
      </div>
    </div>
  );
};

export default Navbar;
