import React from "react";
import { CartBlock } from "../components/CartBlock/CartBlock";
import { useSelector } from "react-redux";

export const Cart = () => {
  const { cartList } = useSelector((state) => state.cartSlice);
  return (
    <div className="cart_wrapper">
      {cartList
        ? cartList.map((el) => <CartBlock key={el.id} {...el} />)
        : "none"}
    </div>
  );
};
