import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import useResturant from "../utils/useResturant";
import Shimmer from "./shimmer";

const ResturantMenu = () => { 
  const { id } = useParams();
  const resturantDetails = useResturant(id);
  
  //console.log(param);

  return !resturantDetails ? (
    <Shimmer />
  ) : (
    <div>
      <h1>Resturant Id : {id}</h1>
      <h2>{resturantDetails.name}</h2>
      <img src={IMG_CDN_URL + resturantDetails.cloudinaryImageId} />
      <h3>{resturantDetails.area}</h3>
      <h3>{resturantDetails.city}</h3>
      <div className="menu">
        <h1>MENU</h1>
        <ul>
          {Object.values(resturantDetails?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResturantMenu;
