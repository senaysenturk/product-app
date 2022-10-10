import React from "react";

const ProductList = ({ products, addCart }) => {
  return (
    <div className="container">
      <div className="breadcrumb">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">All</a>
          </li>
        </ul>
      </div>
      <div className="list">
        {products.map((product, index) => (
          <div className="card" key={index}>
            <div className="card-info">
              <img src={product.img} width="42%" alt="" />
              <h3>{product.name}</h3>
              <h4>{product.price} TRY</h4>
            </div>

            <div className="add-cart">
              <a
                className="add-cart-item"
                onClick={(e) =>
                  addCart({
                    img: product.img,
                    name: product.name,
                    price: product.price,
                  })
                }
              >
                Add to Cart
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
