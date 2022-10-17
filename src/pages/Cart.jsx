import React from "react";
import { CartBlock } from "../components/CartBlock/CartBlock";

export const Cart = () => {
  return (
    <div className="cart_wrapper">
      <CartBlock />
      <CartBlock />
      <CartBlock />
    </div>
  );
};
