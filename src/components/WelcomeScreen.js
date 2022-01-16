import { Link } from "react-router-dom";

export default function WelcomeScreen() {
  return (
    <div className="WelcomeScreen">
      <h1>Welcome to FooBar!</h1>
      <section className="steps">
        <div className="step one">
          <h1>Step 1</h1>

          <img src="../images/beer.png" alt="beer"></img>
          <h2>CHOOSE YOUR BEER</h2>
        </div>
        <div className="step two">
          <h1>Step 2</h1>
          <img src="../images/shopping-cart.png" alt="shopping cart"></img>
          <h2>ADD TO BASKET</h2>
        </div>
        <div className="step three">
          <h1>Step 3</h1>

          <img src="../images/credit-card.png" alt="credit card"></img>
          <h2>PICK YOUR PAYMENT</h2>
        </div>
        <div className="step four">
          <h1>Step 4</h1>

          <img src="../images/hashtags.png" alt="hashtags"></img>
          <h2>GRAB YOUR ORDER AT THE BAR</h2>
        </div>
      </section>
      <div className="orderButton">
        <Link to="/wrapper" className="startOrder">
          START YOUR ORDER
        </Link>
      </div>
      {/* <div className="beer-middle">
        <div className="beerGlass">
          <img src="../images/glass2.svg" alt="beer glass" />
        </div>
        <div className="beerLiquid">
          <img className="serving" src="../images/beer2.svg" alt="beer" />
        </div>
        <div className="beerGlass">
          <img src="../images/shadows2.svg" alt="beer glass" />
        </div>
      </div> */}
    </div>
  );
}
