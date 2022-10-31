import "./App.scss";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import ProductList from "./components/product-list/ProductList";
import { useEffect, useState } from "react";
import axios from "axios";


function App() {
  const categories = ["All", "Woman", "Man", "Child", "Home", "Electronic"];
  const products = [];

  const [productList, setProductList] = useState([]);
  const [cartCount, setCardCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchedProduct, setSearchedProduct] = useState("");
  const [showCart, setShowCart] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [cartList, setCartList] = useState([]);
  const [productCount, setProductCount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      try {
        setIsLoading(true);
        axios.get("http://localhost:5500/products").then((res) => {
          setProductList([...res.data]);
          setIsLoading(false);
         console.log(productList)
        });
      } catch (error) {
        setIsLoading(false);
      }
    };
    getProduct();
  }, []);

  const updateCount = (itemId) => {
    cartList.find((item) => item.id === itemId).count += 1;
  };
  const addCart = (value) => {
    setCardCount((prevCount) => prevCount + 1);

    cartList.findIndex((item) => item.id == value.id) < 0
      ? setCartList((prevCartList) => [...prevCartList, value])
      : updateCount(value.id);
  };
  const updateCart = (id, value) => {
    cartList.find((item) => item.id === id).count += value;
    setCartList([...cartList]);
    setCardCount((prevCount) => (prevCount += value));
  };
  const increaseCount = (id) => {
    updateCart(id, 1);
  };
  const decreaseCount = (id) => {
    updateCart(id, -1);
  };
  const changeCount = (id, value) => {
    cartList.find((item) => item.id === id).count = value;
    setCartList([...cartList]);
    setCardCount((prevCount) => (prevCount = value));
  };
  const handleCartClick = () => {
    setShowCart(prevShowCart => !prevShowCart)
    showProfile && setShowProfile(prevShowCart => !prevShowCart);
  };

  const handleProfileClick = () => {
    setShowProfile(prevShowCart => !prevShowCart);
    showCart && setShowCart(prevShowCart => !prevShowCart);
    };

  const deleteOrder = (productId) => {
    //console.log(cartList.findIndex((product) => product.id === productId));
    cartList.splice(
      cartList.findIndex((product) => product.id === productId),
      1
    );
    setCartList([...cartList]);
    setCardCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="App">
      <Navbar
        cartCount={cartCount}
        productList={productList}
        handleCartClick={handleCartClick}
        handleProfileClick={handleProfileClick}
        showCart={showCart}
        showProfile={showProfile}
        increaseCount={increaseCount}
        decreaseCount={decreaseCount}
        productCount={productCount}
        cartList={cartList}
        deleteOrder={deleteOrder}
        changeCount={changeCount}
      ></Navbar>
      <div className="main">
        <Sidebar
          categories={categories}
          setSelectedCategory={setSelectedCategory}
          setSearchedProduct={setSearchedProduct}
        ></Sidebar>

        <ProductList
        
        productList={productList.filter((product) => {
            if (selectedCategory === "" && searchedProduct === "") {
              // console.log("");
              return true;
            } else if (("searchedProduct:", searchedProduct)) {
              // console.log(searchedProduct);
              return product.name.toLowerCase().includes(searchedProduct);
            } else if (selectedCategory === "All") {
              return true;
            } else {
              return product.category === selectedCategory;
            }
          })}
          addCart={addCart}
          isLoading={isLoading}
        ></ProductList>
      </div>
    </div>
  );
}

export default App;
