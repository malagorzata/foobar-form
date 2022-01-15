import { Link } from "react-router-dom";

export default function WelcomeScreen() {
  return (
    <div className="WelcomeScreen">
      <h1>Welcome to FooBar</h1>
      <ul className="manual">
        <li>1. Choose your beer</li>
        <li>2. Add to basket</li>
        <li>3. Pick your preferred payment method </li>
        <li>4. Wait for your #number to be called</li>
      </ul>
      <h2>Enjoy your beers!</h2>
      <div className="orderButton">
        <Link to="/wrapper" className="startOrder">
          START
        </Link>
      </div>
      <div className="beer-middle">
        <div className="beerGlass">
          <img src="../images/glass2.svg" alt="beer glass" />
        </div>
        <div className="beerLiquid">
          <img className="serving" src="../images/beer2.svg" alt="beer" />
        </div>
        <div className="beerGlass">
          <img src="../images/shadows2.svg" alt="beer glass" />
        </div>
      </div>
    </div>
  );
}
