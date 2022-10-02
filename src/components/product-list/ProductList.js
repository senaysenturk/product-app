import React from "react";

const ProductList = ({ products, addCart }) => {
  console.log(products);
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
            <img src={product.img} width="100" alt="" />
            <h2>{product.name}</h2>
            <h3>{product.price}$</h3>
            <a className="add-cart" onClick={addCart}>
              Add to Cart
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
