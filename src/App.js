import "./sass/style.scss";
import { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import Basket from "./components/Basket";
import { Routes, Route } from "react-router-dom";
import PaymentSection from "./components/PaymentSection";
import OrderCompleted from "./components/OrderCompleted";

function App() {
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([]);
  const [orderID, setOrderID] = useState("0");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://foo-bar-database.herokuapp.com/beertypes");
      const data = await res.json();
      setProducts(data);
    }
    fetchData();
  });

  const productCopy = [...products];

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Wrapper products={productCopy} basket={basket} />} />
        <Route path="/payment" element={<PaymentSection basket={basket} setBasket={setBasket} setOrderID={setOrderID} orderID={orderID} />} />
        <Route path="/ordercompleted" element={<OrderCompleted orderID={orderID} />} />
      </Routes>
    </div>
  );
}
const Wrapper = (props) => {
  // console.log(props);
  return (
    <>
      <ProductList products={props.products} />
      <Basket basket={props.basket} />
    </>
  );
};
export default App;
