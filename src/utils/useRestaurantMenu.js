import { useEffect, useState } from "react";
import { MENU_URL } from "./constant";

const useRestaurantMenu = (resId) => {
  const [resInfo, setresInfo] = useState(null);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const response = await fetch(MENU_URL + resId);
    const json = await response.json();
    setresInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
