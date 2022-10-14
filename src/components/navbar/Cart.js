import React from "react";

const Cart = ({ increaseCount, decreaseCount, cartList, deleteOrder }) => {
  let totalPrice = 0;

  for (const item of cartList) {
    totalPrice += parseFloat(item.price) * item.count;
  }
  // console.log(totalPrice)
  return cartList.length > 0 ? (
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
                  onClick={(e) =>
                    product.count > 1
                      ? decreaseCount(product.id)
                      : deleteOrder(product.id)
                  }
                />
                {/* <input type="text" value={productCount} /> */}
                <input type="text" value={product.count} />
                <input
                  type="button"
                  defaultValue="+"
                  onClick={(e) => {
                    increaseCount(product.id);
                  }}
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
  ) : (
    <div className="cart-list">
      <div className="empty-cart">
        <i class="fa-solid fa-cart-plus"></i>
        <h3>Your cart is empty</h3>
        <p>
          To fill your cart from Nozama's world full of opportunities You can
          start to review the following products.
        </p>
      </div>
      
    </div>
  );
};

export default Cart;
