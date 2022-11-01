import "./App.scss";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import ProductList from "./components/product-list/ProductList";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const categories = ["All", "Woman", "Man", "Child", "Home", "Electronic"];
  const products = [
    {
      id: 1,
      name: `Black Boot`,
      category: `Woman`,
      img: "https://cdn.dsmcdn.com/ty428/product/media/images/20220510/12/108805493/321184391/1/1_org_thumb.jpg",
      price: 999,
    },
    {
      id: 2,
      name: `Coat`,
      category: `Man`,
      img: "https://cdn.dsmcdn.com//ty533/product/media/images/20220914/11/175119345/569068745/1/1_org.jpg",
      price: 4400,
    },
    {
      id: 3,
      name: `Wall Clock`,
      category: `Home`,
      img: "https://cdn.dsmcdn.com/mnresize/-/-//ty132/product/media/images/20210623/12/103292226/192054828/1/1_org_thumb.jpg",
      price: 99.99,
    },
    {
      id: 4,
      name: `Phone`,
      category: `Electronic`,
      img: "https://cdn.dsmcdn.com//ty537/product/media/images/20220920/21/177585013/574173122/2/2_org.jpg",
      price: 57000,
    },
    {
      id: 5,
      name: `Tedy Bear`,
      category: `Child`,
      img: "https://cdn.dsmcdn.com/mnresize/-/-//ty95/product/media/images/20210404/14/4566e55a/58777902/1/1_org_thumb.jpg",
      price: 100,
    },
    {
      id: 6,
      name: `Handbag`,
      category: `Woman`,
      img: "https://cdn.dsmcdn.com//ty532/product/media/images/20220913/6/174726639/568518706/1/1_org.jpg",
      price: 999,
    },
    {
      id: 7,
      name: `Boot`,
      category: `Man`,
      img: "https://cdn.dsmcdn.com//ty557/product/media/images/20221008/4/188982235/20026157/1/1_org.jpg",
      price: 100,
    },
    {
      id: 8,
      name: `Bathroom Set`,
      category: `Home`,
      img: "https://cdn.dsmcdn.com/mnresize/-/-//ty519/product/media/images/20220901/15/168085259/488319748/1/1_org_thumb.jpg",
      price: 100,
    },
    {
      id: 9,
      name: `Wireless Headphone`,
      category: `Electronic`,
      img: "https://cdn.dsmcdn.com//ty173/product/media/images/20210907/12/127164305/238498852/1/1_org.jpg",
      price: 5199.9,
    },
    {
      id: 10,
      name: `Toy`,
      category: `Child`,
      img: "https://cdn.dsmcdn.com//ty324/product/media/images/20220206/12/45778858/158711644/1/1_org.jpg",
      price: 100,
    },
  ];

  const [productList, setProductList] = useState([]);
  const [cartCount, setCardCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchedProduct, setSearchedProduct] = useState("");
  // setProductList(prevList => [...prevList, products]);
  const [showCart, setShowCart] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [cartList, setCartList] = useState([]);
  const [productCount, setProductCount] = useState(1);

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
          products={products.filter((product) => {
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
        ></ProductList>
      </div>
    </div>
  );
}

export default App;
