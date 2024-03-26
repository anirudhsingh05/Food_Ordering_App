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
    <div className="m-4 p-4 w-[272] bg-gray-100 rounded-lg hover:bg-gray-200 h-[450]">
      <img
        className="rounded-lg h-[200] w-[270]"
        alt="res-logo"
        src={IMG_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <div>
        <h4>{cuisines.join(", ")}</h4>
        <h4>
          {sla?.slaString} {}
        </h4>
        <h4>
          {avgRatingString} stars {costForTwo}
        </h4>
      </div>
    </div>
  );
};

export const withLabelRestaurantCard = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-slate-100 rounded-lg p-2">
          🟢 Pure Veg
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
