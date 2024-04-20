import RestaurantCard, { withLabelRestaurantCard } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterList, setFilterList] = useState([]);

  const RestaurantCardWithLabel = withLabelRestaurantCard(RestaurantCard);

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
    setFilterList(
      responsedData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>Looks like you're offline!! Please check your Internet Connection</h1>
    );

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search my-4 py-4">
          <input
            type="text"
            data-testid="searchInput"
            className="ml-4 border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-green-100 mx-4 rounded-lg hover:bg-green-200"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterList(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex items-center">
          <button
            className="bg-green-100 py-2 px-4 rounded-lg hover:bg-green-200"
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
        <div className="flex items-center m-4 p4">
          <label>UserName :</label>
          <input
            className="border border-black m-4 p-1 rounded-lg"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {/* <RestaurantCard resData={resobjlist[0]} />
          <RestaurantCard resData={resobjlist[1]} /> */}
        {filterList.map((Restaurant) => (
          <Link
            to={"/restaurant/" + Restaurant.info.id}
            key={Restaurant.info.id}
          >
            {Restaurant.info.veg === true ? (
              <RestaurantCardWithLabel resData={Restaurant} />
            ) : (
              <RestaurantCard resData={Restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
