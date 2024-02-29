import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Components :
 *
 *  -Headers:
 *      -logo
 *      -Nav-items
 *  -Body:
 *      -search bar
 *      -Restaurant-container
 *          -img
 *          -Name of restuarant
 *          -starrating
 *          -Time of delivery
 *          -cusine
 *  -Footer:
 *      -Copyright
 *      -links
 *      -address
 *      -contact
 * */

const Headers = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://static.vecteezy.com/system/resources/thumbnails/008/687/818/small/food-delivery-logo-free-vector.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Sign in</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/wet9zrjusmdtkk16jlrz"
      />
      <h3>Meghana Foods</h3>
      <h4>North Indian, Asians</h4>
      <h4>38 minutes</h4>
      <h4>4.4 stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Headers />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
