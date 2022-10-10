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
      name: `Black Boot`,
      category: `Woman`,
      img: "https://cdn.dsmcdn.com/ty428/product/media/images/20220510/12/108805493/321184391/1/1_org_thumb.jpg",
      price: "999",
    },
    {
      id: Math.ceil(Math.random() * 1000),
      name: `Coat`,
      category: `Man`,
      img: "https://cdn.dsmcdn.com//ty533/product/media/images/20220914/11/175119345/569068745/1/1_org.jpg",
      price: "4.400",
    },
    {
      id: Math.ceil(Math.random() * 1000),
      name: `Wall Clock`,
      category: `Home`,
      img: "https://cdn.dsmcdn.com/mnresize/-/-//ty132/product/media/images/20210623/12/103292226/192054828/1/1_org_thumb.jpg",
      price: "99,99",
    },
    {
      id: Math.ceil(Math.random() * 1000),
      name: `Phone`,
      category: `Electronic`,
      img: "https://cdn.dsmcdn.com//ty537/product/media/images/20220920/21/177585013/574173122/2/2_org.jpg",
      price: "57.000",
    },
    {
      id: Math.ceil(Math.random() * 1000),
      name: `Toy`,
      category: `Child`,
      img: "https://cdn.dsmcdn.com/mnresize/-/-//ty95/product/media/images/20210404/14/4566e55a/58777902/1/1_org_thumb.jpg",
      price: "",
    },
    {
      id: Math.ceil(Math.random() * 1000),
      name: `Handbag`,
      category: `Woman`,
      img: "https://cdn.dsmcdn.com//ty532/product/media/images/20220913/6/174726639/568518706/1/1_org.jpg",
      price: "999",
    },
    {
      id: Math.ceil(Math.random() * 1000),
      name: `Boot`,
      category: `Man`,
      img: "https://cdn.dsmcdn.com//ty557/product/media/images/20221008/4/188982235/20026157/1/1_org.jpg",
      price: "100",
    },
    {
      id: Math.ceil(Math.random() * 1000),
      name: `Bathroom Set`,
      category: `Home`,
      img: "https://cdn.dsmcdn.com/mnresize/-/-//ty519/product/media/images/20220901/15/168085259/488319748/1/1_org_thumb.jpg",
      price: "100",
    },
    {
      id: Math.ceil(Math.random() * 1000),
      name: `Wireless Headphone`,
      category: `Electronic`,
      img: "https://cdn.dsmcdn.com//ty173/product/media/images/20210907/12/127164305/238498852/1/1_org.jpg",
      price: "5.199,90",
    },
    {
      id: Math.ceil(Math.random() * 1000),
      name: `Toy`,
      category: `Child`,
      img: "https://cdn.dsmcdn.com//ty324/product/media/images/20220206/12/45778858/158711644/1/1_org.jpg",
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

  const addCart = (value) => {
    setCardCount((prevCount) => prevCount + 1);
    setCartList((prevCartList) => [...prevCartList, value]);
  };
  const increaseCount = () => setProductCount((prevCount) => prevCount + 1);
  const decreaseCount = () => setProductCount((prevCount) => prevCount - 1);

  const handleCartClick = () => {
    setClickCount((prevCount) => prevCount + 1);
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
        cartList={cartList}
      ></Navbar>
      <div className="main">
        <Sidebar
          categories={categories}
          setSelectedCategory={setSelectedCategory}
          setSearchedProduct={setSearchedProduct}
        ></Sidebar>

        <ProductList
          products={products.filter((product) => {
            if (selectedCategory == "" && searchedProduct == "") {
              console.log("");
              return true;
            } else if (("searchedProduct:", searchedProduct)) {
              console.log(searchedProduct);
              return product.name.toLowerCase().includes(searchedProduct);
            } else if (selectedCategory == "All") {
              return true;
            } else {
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
