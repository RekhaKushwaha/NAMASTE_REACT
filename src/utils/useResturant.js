import { useEffect, useState } from "react";
import { SWIGGY_MENU_API } from "../constants";

const useResturant = (id) => {

  const [resturantDetails, setResturantDetails] = useState(null);
  //API call
  useEffect(() => {
    getResturantInfo();
  }, []);

  async function getResturantInfo() {
    const data = await fetch(SWIGGY_MENU_API + id);
    const json = await data.json();
    setResturantDetails(json?.data);
  }

  return resturantDetails;
};

export default useResturant;
