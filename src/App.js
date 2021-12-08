import "./sass/style.scss";

import { useState, useEffect } from "react";

import ProductList from "./components/ProductList";
import Basket from "./components/Basket";
import ProductView from "./components/ProductView";
import { Routes, Route, Link } from "react-router-dom";
import PaymentSection from "./components/PaymentSection";
import Product from "./components/Product";

function App() {
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://foo-bar-database.herokuapp.com/beertypes");
      const data = await res.json();
      setProducts(data);
    }
    fetchData();
  });

  //BASKET FUNCTIONS
  // function addToBasket(product) {
  //   setBasket(function (oldBasket) {
  //     const nextState = oldBasket.concat(product);
  //     return nextState;
  //   });
  // }

  const productCopy = [...products];
  // productCopy.sort((a, b) => {
  //   if (a.productdisplayname > b.productdisplayname) {
  //     return 1;
  //   } else {
  //     return -1;
  //   }
  // });

  return (
    <div className="App">
      {/* <ProductList products={productCopy} />
      <Basket basket={basket} />
      <PaymentSection /> */}

      <Routes>
        <Route path="/" element={<Wrapper products={productCopy} basket={basket} />} />
        <Route path="/payment" element={<PaymentSection />} />
      </Routes>
    </div>
  );
}
const Wrapper = (props) => {
  console.log(props);
  return (
    <>
      <ProductList products={props.products} />
      <Basket basket={props.basket} />
    </>
  );
};
export default App;
