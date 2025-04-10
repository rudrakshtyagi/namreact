import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";


const Body = () => {
    return (
      <div className="body">
        <div className="filter">

<button className="filter-btn" onClick={()=>{}}> Top rated resturant</button>

        </div>
        <div className="res-container">
          {resList.map((resturant) => (
            <ResturantCard key={resturant.info.id} resData={resturant} />
          ))}
        </div>
      </div>
    );
  };
  export default Body;
