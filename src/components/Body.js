import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const responsedData = await data.json();
    setListOfRestaurants(
      responsedData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* <RestaurantCard resData={resobjlist[0]} />
          <RestaurantCard resData={resobjlist[1]} /> */}
        {listOfRestaurants.map((Restaurant) => (
          <RestaurantCard key={Restaurant.info.id} resData={Restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
