import React from "react";
import Cart from "./Cart";
import Profile from "./Profile";

const Navbar = ({
  cartCount,
  handleCartClick,
  handleProfileClick,
  showCart,
  showProfile,
  increaseCount,
  decreaseCount,
  productCount,
  cartList,
  deleteOrder,
  changeCount,
}) => {
  return (
    <div className="navbar">
      <div className="logo">
        <i className="fa-brands fa-neos"></i>
        <span>NOZAMA</span>
      </div>
      <div className="nav-right">
        <div className="profile" onClick={handleProfileClick}>
          <a className="align-items-row">
            <i className="fa-solid fa-user"></i>
            <h6>Login</h6>
          </a>
          {showProfile && <Profile></Profile>}
        </div>
        <div className="cart" onClick={handleCartClick}>
          <a className="align-items-row">
            <i className="fa-solid fa-cart-arrow-down"></i>
            <h6>My Cart</h6>
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </a>
        </div>
        {showCart && (
          <Cart
            increaseCount={increaseCount}
            decreaseCount={decreaseCount}
            deleteOrder={deleteOrder}
            cartList={cartList}
            changeCount={changeCount}
          ></Cart>
        )}
      </div>
    </div>
  );
};

export default Navbar;
