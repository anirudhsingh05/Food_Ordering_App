import resobjlist from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        {/* <RestaurantCard resData={resobjlist[0]} />
          <RestaurantCard resData={resobjlist[1]} /> */}
        {resobjlist.map((Restaurant) => (
          <RestaurantCard key={Restaurant.info.id} resData={Restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
