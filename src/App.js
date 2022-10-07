import "./App.scss";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import ProductList from "./components/product-list/ProductList";
import { useState } from "react";

function App() {
  const categories = ["All", "Woman", "Man", "Child", "Home", "Electronic"];
  const products = [
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
  ];

  const [productList, setProductList] = useState([]);
  const [cartCount, setCardCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchedProduct, setSearchedProduct] = useState("");
  // setProductList(prevList => [...prevList, products]);
  const [showCart, setShowCart] = useState(false);
  const [cartList, setCartList] = useState([]);
  const [productCount, setProductCount] = useState(1);
  const [clickCount, setClickCount] = useState(0);

  const addCart = () => setCardCount((prevCount) => prevCount + 1);
  const increaseCount = () => setProductCount((prevCount) => prevCount + 1);
  const decreaseCount = () => setProductCount((prevCount) => prevCount + 1);
  
  const handleCartClick = () => {
    setClickCount((prevCount) => prevCount + 1)
    if (clickCount % 2 === 0) setShowCart(true);
    else setShowCart(false);
  };

  
  return (
    <div className="App">
      <Navbar
        cartCount={cartCount}
        productList={productList}
        handleCartClick={handleCartClick}
        showCart={showCart}
        increaseCount={increaseCount}
        decreaseCount={decreaseCount}
        productCount={productCount}
      ></Navbar>
      <div className="main">
        <Sidebar
          categories={categories}
          setSelectedCategory={setSelectedCategory}
          setSearchedProduct={setSearchedProduct}
        ></Sidebar>

        <ProductList
          products={products.filter((product) => {
            if (
              (selectedCategory === "" && searchedProduct === "") ||
              selectedCategory === "All"
            ) {
              // console.log("");
              return true;
            } else if (searchedProduct) {
              // console.log(searchedProduct);
              return product.name.toLowerCase().includes(searchedProduct);
            } else {
              // console.log(selectedCategory);
              return product.category == selectedCategory;
            }
          })}
          addCart={addCart}
        ></ProductList>
      </div>
    </div>
  );
}

export default App;
