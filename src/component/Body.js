import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "./utils/resList";

const Body = function (props) {
  // local state variables-super powerful variable
  const [listOfRestaurant, setlistOfRestaurant] = useState(resList);

  //normal js variable
  /*   let listOfRestaurant1 = [
    {
      name: "Classic Margherita Pizza",
      tags: ["Pizza", "Italian"],
      image: "https://cdn.dummyjson.com/recipe-images/1.webp",
      rating: 4.6,
    },
    {
      name: "dominos",
      tags: ["Pizza", "Italian"],
      image: "https://cdn.dummyjson.com/recipe-images/1.webp",
      rating: 3.8,
    },
    {
      name: "MCD",
      tags: ["Pizza", "Italian"],
      image: "https://cdn.dummyjson.com/recipe-images/1.webp",
      rating: 4.1,
    },
  ]; */
  return (
    <div className="body">
      <div className="top-rated">
        <button
          className="filter-btn"
          onClick={() => {
            // filter out top rated
            const filteredlist = listOfRestaurant.filter(
              (res) => res.rating > 4
            );
            setlistOfRestaurant(filteredlist);
          }}
        >
          Top rated restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((resData) => (
          <RestaurantCard key={resData.id} resData={resData} />
        ))}
      </div>
    </div>
  );
};

export default Body;
