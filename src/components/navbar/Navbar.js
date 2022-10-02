import React from "react";

const Navbar = ({ cartCount }) => {
  return (
    <div className="navbar">
      <div className="logo">
        <i className="fa-brands fa-neos"></i>
        <span>NOZAMA</span>
      </div>
      <div className="cart-items">
        <a className="cart">
          <div className="cart-icon">
            <span className="cart-count">{cartCount}</span>
            <i className="fa-solid fa-cart-arrow-down"></i>
          </div>
        </a>
          <span>Cart</span>
      </div>
    </div>
  );
};

export default Navbar;
