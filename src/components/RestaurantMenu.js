import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constant";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setresInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const responsedData = await fetch(MENU_URL + resId);
    const resData = await responsedData.json();
    console.log(resData.data);
    setresInfo(resData.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines, avgRatingString } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;

  console.log(itemCards);

  return (
    <div className="menu">
      <h1> {name} </h1>
      <h4>
        {" "}
        {cuisines.join(",")} - {costForTwoMessage}{" "}
      </h4>
      <h4> Avg Rating : {avgRatingString} </h4>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs.{" "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
