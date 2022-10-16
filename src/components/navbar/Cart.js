import React from "react";

const Cart = ({ increaseCount, decreaseCount, cartList, deleteOrder,changeCount }) => {
  let totalPrice = 0;

  for (const item of cartList) {
    totalPrice += parseFloat(item.price) * item.count;
  }

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
                {product.count > 1 ? (
                  <i
                    className="fa-solid fa-minus count-icon"
                    onClick={(e) => decreaseCount(product.id)}
                  ></i>
                ) : (
                  <i
                    className="fa-solid fa-trash count-icon"
                    onClick={(e) => deleteOrder(product.id)}
                  ></i>
                )}

                {/* <input type="text" value={productCount} /> */}
                <input className="count-icon"type="text" defaultValue={product.count} onChange={e=> changeCount(product.id, e.target.value)}/>

                <i
                  className="fa-solid fa-plus count-icon"
                  onClick={(e) => {
                    increaseCount(product.id);
                  }}
                ></i>
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
        <i className="fa-solid fa-cart-plus"></i>
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
