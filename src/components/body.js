import ResturantsCard from "./ResturantsCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom"
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";



const Body = () => {
  const [allrestaurants,setAllRestaurants]=useState([]);
  const [filteredrestaurants,setFilteredRestaurants]=useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(()=> {
     getResturants();
  },[])

  async function getResturants(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4400802&lng=78.3489168&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    //optional chaining
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const isOnline = useOnline();

 if(!isOnline) {
  return <h1>Your are Offline, Please check your internet</h1>;
 }

  if(!allrestaurants) return null;
  // if(filteredrestaurants?.length===0) return <h1>No returant found in list</h1>
  return allrestaurants.length===0? (<Shimmer/>) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search with Name"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allrestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="resturant-list">
        {filteredrestaurants.map((resturant) => {
          return (
            <Link to={"/resturant/"  + resturant.data.id}  key={resturant.data.id}>
              <ResturantsCard {...resturant.data} />;
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
