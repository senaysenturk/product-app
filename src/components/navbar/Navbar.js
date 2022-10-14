import React from "react";
import Cart from "./Cart";

const Navbar = ({
  cartCount,
  handleCartClick,
  showCart,
  increaseCount,
  decreaseCount,
  productCount,
  cartList,
  deleteOrder,
}) => {
  return (
    <div className="navbar">
      <div className="logo">
        <i className="fa-brands fa-neos"></i>
        <span>NOZAMA</span>
      </div>
      <div className="cart-items" onClick={handleCartClick}>
        <a className="cart">
          <div className="cart-icon">
            <span className="cart-count">{cartCount}</span>
            <i className="fa-solid fa-cart-arrow-down"></i>
          </div>
        </a>
        <span>Cart</span>
      </div>
      {showCart && (
        <Cart
          increaseCount={increaseCount}
          decreaseCount={decreaseCount}
          productCount={productCount}
          deleteOrder={deleteOrder}
          cartList={cartList}
        ></Cart>
      )}
    </div>
  );
};

export default Navbar;
