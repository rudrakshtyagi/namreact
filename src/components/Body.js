import ResturantCard from "./ResturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // ✅ Original data
  const [listOfResturant, setListOfResturant] = useState([]);

  // ✅ Filtered/display data
  const [filteredRestu, setFilteredRestu] = useState([]);

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=29.4886494&lng=77.6978334&carousel=true&third_party_vendor=1"
    );

    const json = await data.json();

    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    // ✅ Set both original and filtered on first load
    setListOfResturant(restaurants); // 🔹 original
    setFilteredRestu(restaurants);   // 🔹 displayed
  };

  //made custom msg fro being offline using or customn hook

const onlineStatus=useOnlineStatus();

if (onlineStatus===false) return (
  <h1>udfhsdufhsdjfhj</h1>
);



  return listOfResturant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="searchBox"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          ></input>

          <button
            className="searchbtn"
            onClick={() => {
              // ✅ Always search from original list
              const filtered = listOfResturant.filter((res) =>
                res.info.name.toLowerCase().includes(searchValue.toLowerCase())
              );
              setFilteredRestu(filtered); // ✅ update display list only
            }}
          >
            search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            // ✅ Always filter from original list
            const filteredList = listOfResturant.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestu(filteredList); // ✅ update display list only
          }}
        >
          Top rated restaurant
        </button>
      </div>

      <div className="res-container">
        {/* ✅ Render filteredRestu instead of listOfResturant */}
        {filteredRestu.map((resturant) => (

          <Link key={resturant.info.id} to={"/resturant/"+resturant.info.id}>
          <ResturantCard resData={resturant} /> 
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
