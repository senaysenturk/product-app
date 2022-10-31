import React from "react";

const ProductList = ({ productList, addCart, isLoading }) => {
  return (
    <div className="container">
      <div className="breadcrumb">
        <ul>
          <li>
            <a href="#"></a>
          </li>
        </ul>
      </div>
      <div className="list">
        {isLoading ? (
          <div>
            <h6 className="loader"></h6>
            <h3>Loading...</h3>
          </div>
        ) : (
          productList.map((product, index) => (
            <div className="card" key={index}>
              <div className="card-info">
                <img src={product.img} alt="" />
                <h5>{product.name}</h5>
                <h3>
                  {product.price.toLocaleString("tr-TR", {
                    minimumFractionDigits: 2,
                  })}{" "}
                  TRY
                </h3>
              </div>

              <div className="add-cart">
                <a
                  className="add-cart-item"
                  onClick={(e) =>
                    addCart({
                      img: product.img,
                      name: product.name,
                      price: product.price,
                      count: 1,
                      id: product.id,
                    })
                  }
                >
                  Add to Cart
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductList;
