import React from "react";

const Cart = ({ increaseCount, decreaseCount, cartList }) => {
  let totalPrice = 0;
  let productCount = 0;

  for (const item of cartList) {
    totalPrice += parseFloat(item.price) * item.count;
  }
  // console.log(totalPrice)
  return (
    cartList.length > 0 && (
      <div className="cart-list">
        <div className="products">
          {cartList.map((product, index) => (
            <div className="product" key={index}>
              <img
                className="product-img"
                src={product.img}
                height="80px"
                alt=""
              />
              <div className="cart-info">
                <p>{product.name}</p>
                <p>
                  {product.price.toLocaleString("tr-TR", {
                    minimumFractionDigits: 2,
                  })}{" "}
                  TRY
                </p>
                <div className="counter">
                  <input
                    type="button"
                    defaultValue="-"
                    onClick={(e) => decreaseCount(product.id)}
                  />
                  {/* <input type="text" value={productCount} /> */}
                  <input type="text" value={product.count} />
                  <input
                    type="button"
                    defaultValue="+"
                    onClick={(e) => increaseCount(product.id)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="order-cost">
          <h3>Order Summary </h3>
          <p>
            Order Total:{" "}
            {totalPrice.toLocaleString("tr-TR", {
              minimumFractionDigits: 2,
            })}{" "}
            TRY
          </p>
        </div>
      </div>
    )
  );
};

export default Cart;
