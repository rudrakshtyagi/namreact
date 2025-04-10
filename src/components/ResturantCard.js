import {CDN_URL} from"../utils/constants";

const ResturantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, cloudinaryImageId } = resData?.info;
    const { deliveryTime } = resData?.info?.sla;
    return (
      <div className="res-card">
        <img
          src={CDN_URL
             +
            resData.info.cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <h4>{cuisines?.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    );
  };

  export default ResturantCard;