import ResturantCard from "./ResturantCard";

import {useState} from "react";
import resList from "../utils/mockData";





const Body = () => {

const [listOfResturant,setListOfResturant]=useState(resList);

    return (
      <div className="body">
        <div className="filter">

<button className="filter-btn" onClick={()=>{

const filteredList=listOfResturant.filter((res)=>res.info.avgRating>4);

setListOfResturant(filteredList);

}}> Top rated resturant</button>

        </div>
        <div className="res-container">
          {listOfResturant.map((resturant) => (
            <ResturantCard key={resturant.info.id} resData={resturant} />
          ))}
        </div>
      </div>
    );
  };
  export default Body;
