import React from "react";

const Cart = ({ increaseCount, decreaseCount, productCount, cartList }) => {
  return (
    <div className="cart-list">
      <div className="products"> 
        {
        cartList.length>0 && (cartList.map((product, index) => (
        <div className="product" key={index}>
        <img className="product-img"
          src={product.img}
          height="80px"
          alt=""
        />
        <div className="cart-info">
          <p>{product.name}</p>
          <p>{product.price} TRY</p>
          <div className="counter">
            <input type="button" defaultValue="-" onClick={decreaseCount} />
            <input type="text" defaultValue={productCount} />
            <input type="button" defaultValue="+" onClick={increaseCount} />
          </div>
        </div>       
      </div>
        )))}
      </div>
      <div className="order-cost">
        <h3>Order Summary </h3>
        <p>
          Items: TRY{" "}
          {(productCount * 100).toLocaleString("tr-TR", {
            minimumFractionDigits: 2,
          })}
        </p>
        <p>Shipping & handling: TRY 20,00</p>
      </div>
    
    </div>
  );
};

export default Cart;
