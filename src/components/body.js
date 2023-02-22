import ResturantsCard from "./resturantsCard";
import { restaurantList } from "../constants";
import { useState } from "react";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((resturant) =>
    resturant.data.name.includes(searchText)
  );

  return filterData;
}

const Body = () => {
  const [resturants, setResturants] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");
  return (
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
            const data = filterData(searchText, resturants);
            setResturants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="resturant-list">
        {resturants.map((resturant) => {
          return <ResturantsCard {...resturant.data} key={resturant.data.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
