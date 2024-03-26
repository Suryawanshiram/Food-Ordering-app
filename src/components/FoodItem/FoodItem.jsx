/* eslint-disable react/prop-types */
import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./FoodItem.css";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="" />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;

/* eslint-disable react/prop-types */
// import { useContext, useState } from "react";
// import { assets } from "../../assets/assets";
// import "./FoodItem.css";
// import { StoreContext } from "../../context/StoreContext";

// const FoodItem = ({ id, name, price, description, image }) => {
//   const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
//   const [itemQuantity, setItemQuantity] = useState(cartItems[id] || 0);

//   const handleAddToCart = () => {
//     addToCart(id);
//     setItemQuantity((prevQuantity) => prevQuantity + 1);
//   };

//   const handleRemoveFromCart = () => {
//     if (itemQuantity > 0) {
//       removeFromCart(id);
//       setItemQuantity((prevQuantity) => prevQuantity - 1);
//     }
//   };

//   return (
//     <div className="food-item">
//       <div className="food-item-img-container">
//         <img className="food-item-image" src={image} alt="" />
//         {itemQuantity === 0 ? (
//           <img
//             className="add"
//             onClick={handleAddToCart}
//             src={assets.add_icon_white}
//             alt=""
//           />
//         ) : (
//           <div className="food-item-counter">
//             <img
//               onClick={handleRemoveFromCart}
//               src={assets.remove_icon_red}
//               alt=""
//             />
//             <p>{itemQuantity}</p>
//             <img onClick={handleAddToCart} src={assets.add_icon_green} alt="" />
//           </div>
//         )}
//       </div>

//       <div className="food-item-info">
//         <div className="food-item-name-rating">
//           <p>{name}</p>
//           <img src={assets.rating_starts} alt="" />
//         </div>
//         <p className="food-item-desc">{description}</p>
//         <p className="food-item-price">${price}</p>
//       </div>
//     </div>
//   );
// };

// export default FoodItem;
