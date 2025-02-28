import { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../../context/StoreContext";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, i) => {
          if (cartItems[item._id] > 0) {
            return (
              <>
                <div key={i} className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>$ {item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>$ {item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    X
                  </p>
                </div>
                <hr />
              </>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div className="">
            <div className="cart-total-details">
              <p>SubTotal</p>
              <p>$ {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>$ {2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>$ {getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <p>If you have Promo Code, Enter it here </p>
          <div className="cart-promocode-input">
            <input type="text" placeholder="Enter promo code" />
            <button>APPLY</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
