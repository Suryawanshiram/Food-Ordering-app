import { useContext } from "react";
import "./DisplayFood.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const DisplayFood = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-delivery">
      <h2 className="">Top dishes near your</h2>
      <div className="food-display-list">
        {food_list.map((item, i) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={i}
                id={item._id}
                name={item.name}
                image={item.image}
                description={item.description}
                price={item.price}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default DisplayFood;
