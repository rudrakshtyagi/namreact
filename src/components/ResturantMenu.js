import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { menu_API } from "../utils/constants";

const ResturantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(menu_API + resId);
      const json = await data.json();
      console.log("Fetched JSON:", json);
      setResInfo(json.data);
    } catch (err) {
      console.error("Error fetching menu:", err);
    }
  };

  if (!resInfo) return <Shimmer />;

  const { name, id, costForTwoMessage, avgRating } =
    resInfo.cards?.[2]?.card?.card?.info || {};

  const categories = resInfo?.cards?.find(
    (card) => card?.groupedCard
  )?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  // 🧠 Get all itemCards from itemCards and categories
  let allItems = [];

  categories?.forEach((card) => {
    if (card?.card?.card?.itemCards) {
      allItems.push(...card.card.card.itemCards);
    } else if (card?.card?.card?.categories) {
      card.card.card.categories.forEach((cat) => {
        if (cat?.itemCards) {
          allItems.push(...cat.itemCards);
        }
      });
    }
  });

  return (
    <div>
      <h1>{name}</h1>
      <h2>ID: {id}</h2>
      <h3>{costForTwoMessage} | ⭐ {avgRating}</h3>

      <h2>Menu:</h2>
      <ul>
        {allItems.length > 0 ? (
          allItems.map((item, index) => (
            <li key={item.card.info.id + "-" + index}>
              {item.card.info.name} - ₹
              {(item.card.info.price || item.card.info.defaultPrice) / 100}
            </li>
          ))
        ) : (
          <p>No items available</p>
        )}
      </ul>
    </div>
  );
};

export default ResturantMenu;
