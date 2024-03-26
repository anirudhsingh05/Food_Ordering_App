import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory = ({ data }) => {
  const [showItem, setShowItem] = useState(false);

  const handleClick = () => {
    setShowItem(!showItem);
  };

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-100 text-lg p-6 shadow-lg ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItem && <ItemsList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
