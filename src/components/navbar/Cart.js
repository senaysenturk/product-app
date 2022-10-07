import React from "react";

const Cart = ({increaseCount,
  decreaseCount,
  productCount}) => {
  return (
    <div className="cart-list">
      <div className="product">
        <img
          src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX472_AV4?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1570119352353"
          height="50px"
          alt=""
        />
        <div className="card-info">
          <p>Product Name</p>
          <p>Price</p>
          <div className="counter">
            <input type="button" value="-" onClick={decreaseCount}/>
            <input type="text" value={productCount}/>
            <input type="button" value="+" onClick={increaseCount}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
