import { IMG_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    sla,
    avgRatingString,
    costForTwo,
  } = resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={IMG_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>
        {sla.slaString} {}
      </h4>
      <h4>
        {avgRatingString} stars {costForTwo}
      </h4>
    </div>
  );
};

export default RestaurantCard;
