import s from "./CartBlock.module.scss";
import React from "react";
import { useDispatch } from "react-redux";
import { removeProduct } from "../../store/slices/cartSlice";

export const CartBlock = ({ src, title, price, id, count }) => {
  const dispatch = useDispatch();

  return (
    <div className={s.block}>
      <div className={s.mainInfo}>
        <img src={src} alt="image" />
        <span>{title}</span>
      </div>
      <div className={s.counter}>
        <button>-</button>
        <span>{count}</span>
        <button>+</button>
      </div>
      <span>{price}</span>
      <button onClick={() => dispatch(removeProduct(id))}>удалить</button>
    </div>
  );
};
