import MobileBasket from "./MobileBasket";
import { useState } from "react";
import { getBasketItems, getTotalPrice } from "../features/basket/basketSlice";
import { useSelector } from "react-redux";

export default function Nav() {
  //basket on mobile view
  const [basketOpen, setBasketOpen] = useState(false);
  const toggleBasket = () => {
    setBasketOpen(!basketOpen);
  };

  //for getting basket items and displaying dot on basket when there are items in basket
  const basketItems = useSelector(getBasketItems);
  let color = "";
  if (basketItems.length === 0) {
    color = "transparent";
  } else {
    color = "#c73c3c";
  }

  return (
    <nav>
      <a href="/">FooBar</a>
      <button className="mobileBasketBtn" onClick={toggleBasket}>
        <svg xmlns="http://www.w3.org/2000/svg" width="35.699" height="27.766" viewBox="0 0 35.699 27.766">
          <path
            id="Icon_awesome-shopping-basket"
            data-name="Icon awesome-shopping-basket"
            d="M35.7,13.654v.992a1.487,1.487,0,0,1-1.487,1.487h-.5L32.1,27.462a2.975,2.975,0,0,1-2.945,2.554H6.547A2.975,2.975,0,0,1,3.6,27.462L1.983,16.133h-.5A1.487,1.487,0,0,1,0,14.646v-.992a1.487,1.487,0,0,1,1.487-1.487H5.661l6.618-9.1A1.983,1.983,0,1,1,15.487,5.4l-4.921,6.767H25.133L20.212,5.4A1.983,1.983,0,0,1,23.42,3.067l6.618,9.1h4.174A1.487,1.487,0,0,1,35.7,13.654ZM19.337,24.562V17.62a1.487,1.487,0,0,0-2.975,0v6.942a1.487,1.487,0,1,0,2.975,0Zm6.942,0V17.62a1.487,1.487,0,0,0-2.975,0v6.942a1.487,1.487,0,1,0,2.975,0Zm-13.883,0V17.62a1.487,1.487,0,0,0-2.975,0v6.942a1.487,1.487,0,1,0,2.975,0Z"
            transform="translate(0 -2.25)"
            fill="#343331"
          />
        </svg>
        <div className="basketDot" style={{ backgroundColor: color }}></div>
      </button>

      {basketOpen && <MobileBasket handleClose={toggleBasket} />}
    </nav>
  );
}
