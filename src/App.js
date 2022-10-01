import "./App.scss";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import ProductList from "./components/product-list/ProductList";
import { useState } from "react";

function App() {
  const [categories, setCategories] = useState([
    "Woman",
    "Man",
    "Child",
    "Home",
    "Electronic",
  ]);

  const [productList, setProductList] = useState([
    {
      id: Math.ceil(Math.random() * 1000),
      name: `Product 1`,
      category: `Woman`,
      img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX472_AV4?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1570119352353",
      price: "100",
    },
    {
      id: Math.ceil(Math.random() * 1000),
      name: `Product 2`,
      category: `Man`,
      img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX472_AV4?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1570119352353",
      price: "100",
    },
    {
      id: Math.ceil(Math.random() * 1000),
      name: `Product 3`,
      category: `Home`,
      img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX472_AV4?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1570119352353",
      price: "100",
    },
    {
      id: Math.ceil(Math.random() * 1000),
      name: `Product 4`,
      category: `Electronic`,
      img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX472_AV4?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1570119352353",
      price: "100",
    },
    {
      id: Math.ceil(Math.random() * 1000),
      name: `Product 5`,
      category: `Child`,
      img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX472_AV4?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1570119352353",
      price: "100",
    },
    {
      id: Math.ceil(Math.random() * 1000),
      name: `Product 6`,
      category: `Woman`,
      img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX472_AV4?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1570119352353",
      price: "100",
    },
    {
      id: Math.ceil(Math.random() * 1000),
      name: `Product 7`,
      category: `Man`,
      img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX472_AV4?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1570119352353",
      price: "100",
    },
    {
      id: Math.ceil(Math.random() * 1000),
      name: `Product 8`,
      category: `Home`,
      img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX472_AV4?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1570119352353",
      price: "100",
    },
    {
      id: Math.ceil(Math.random() * 1000),
      name: `Product 9`,
      category: `Electronic`,
      img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX472_AV4?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1570119352353",
      price: "100",
    },
    {
      id: Math.ceil(Math.random() * 1000),
      name: `Product 10`,
      category: `Child`,
      img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX472_AV4?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1570119352353",
      price: "100",
    },
  ]);

  // setProductList(prevList => [{
  //   id: Math.ceil(Math.random() * 1000),
  //   name: `Product 1`,
  //   category: `Woman`,
  //   img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX472_AV4?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1570119352353",
  //   price: "100",
  // }]);

  const getCategoryProducts = (category) => {
    setProductList((prevProductList) =>
      prevProductList.filter((prd) => prd.category == category)
    );
  };

  const handleSetProduct = (value) => setProductList(prevProduct => ({...prevProduct, ...value}));


  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="main">
        <Sidebar categories={categories} getCategoryProducts={getCategoryProducts}></Sidebar>

        <ProductList productList={productList} handleSetProduct={handleSetProduct}></ProductList>
      </div>
    </div>
  );
}

export default App;
