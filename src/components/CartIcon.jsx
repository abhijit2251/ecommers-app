import React from "react";
import "./CartIcon.css";
import cart from "../img/cart.png";

const CartIcon = () => {
  return (
    <div className="CartIcon">
      <img className="cart-img" src={cart} alt="cart" />
    </div>
  );
};

export default CartIcon;
