import "./sass/style.scss";
import { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import Basket from "./components/Basket";
import { Routes, Route } from "react-router-dom";
import PaymentSection from "./components/PaymentSection";
import OrderCompleted from "./components/OrderCompleted";

function App() {
  // const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([]);
  const [orderID, setOrderID] = useState("0");
  const [tap, setTap] = useState([]);

  useEffect(() => {
    Promise.all([fetch("https://foo-bar-database.herokuapp.com/").then((res) => res.json()), fetch("https://foo-bar-database.herokuapp.com/beertypes").then((res) => res.json())]).then((data) => {
      const taps = data[0].taps;
      const workingTaps = taps.map((tap) => tap.beer);
      const types = data[1];

      const beerOnTap = types.filter((type) => {
        if (workingTaps.includes(type.name)) {
          return true;
        }
        return false;
      });
      setTap(beerOnTap);
    });
  }, []);

  const productCopy = [...tap];

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Wrapper tap={productCopy} basket={basket} />} />
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
      <ProductList products={props.tap} />
      <Basket basket={props.basket} />
    </>
  );
};
export default App;
