import s from "./Card.module.scss";
import React from "react";

export const Card = ({ title, price }) => {
  return (
    <div className={s.card}>
      <img src="/logo.png" alt="product" />
      <span className={s.name}>{title}</span>
      <span className="card_price">{price} р.</span>
      <button>В корзину</button>
    </div>
  );
};
