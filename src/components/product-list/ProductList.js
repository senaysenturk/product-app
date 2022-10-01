import React from "react";

const ProductList = ({ productList, handleSetProduct }) => {
  return (

    <div className="list">
      {
      productList.map((product, index) => (
        <div className="card" key={index}>
          <img src={product.img} width="100" alt="" />
          <h2>{product.name}</h2>
          <h3>{product.price}</h3>
        </div>
      ))
      }
    </div>
  );
};

export default ProductList;
