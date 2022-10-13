import React from "react";

const Cart = ({ increaseCount, decreaseCount, productCount, cartList }) => {
  let totalPrice = 0;

  for (const item of cartList) {
   totalPrice += parseFloat(item.price)
  }
  // console.log(totalPrice)
  return (
    <div className="cart-list">
      <div className="products"> 
        {
          
        cartList.length>0 && (cartList.map((product, index) => (
     
        <div className="product" key={index}>
             <p>{product.id}</p>
        <img className="product-img"
          src={product.img}
          height="80px"
          alt=""
        />
        <div className="cart-info">
          <p>{product.name}</p>
          <p>{product.price.toLocaleString("tr-TR", {
            minimumFractionDigits: 2,
          })} TRY</p>
          <div className="counter">
            <input type="button" defaultValue="-" onClick={decreaseCount} />
            <input type="text" value={product.count}/>
            <input type="button" defaultValue="+" onClick={increaseCount} />
          </div>
        </div>       
      </div>
      
        )))
        }
        
      </div>
      <div className="order-cost">
        <h3>Order Summary </h3>
        <p>
          Order Total: {(totalPrice*productCount).toLocaleString("tr-TR", {
            minimumFractionDigits: 2,
          })}TRY
        </p>
        
      </div>
    
    </div>
  );
};

export default Cart;
