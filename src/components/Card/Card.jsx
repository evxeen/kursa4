import s from "./Card.module.scss";
import React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/slices/cartSlice";

export const Card = ({ src, title, price, id }) => {
  const dispatch = useDispatch();

  const addToCart = (src, title, price, id) => {
    const product = {
      src,
      title,
      price,
      id,
      count: 1,
    };

    dispatch(addProduct(product));
  };

  return (
    <div className={s.card}>
      <img src={src} alt="product" />
      <span className={s.name}>{title}</span>
      <span className="card_price">{price} р.</span>
      <button onClick={() => addToCart(src, title, price, id)}>
        В корзину
      </button>
    </div>
  );
};
