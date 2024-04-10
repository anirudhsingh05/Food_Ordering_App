import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { IMG_URL } from "../utils/constant";

const ItemsList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="border-b-2 bg-slate-100 m-2 p-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name} - </span>
              <span>
                ₹
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 h-auto p-4">
            <div className="absolute">
              <button
                className="p-2 bg-black text-white shadow-lg rounded-lg"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img
              src={IMG_URL + item.card.info?.imageId}
              className="rounded-md w-full h-40"
              alt="It does'nt conatin image id"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
