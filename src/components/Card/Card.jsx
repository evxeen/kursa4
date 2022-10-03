import s from "./Card.module.scss";
import React from "react";

export const Card = () => {
  return (
    <div className={s.card}>
      <img src="/logo.png" alt="product" />
      <span className={s.name}>Наименование</span>
      <span className="card_price">Прайс</span>
      <button>В корзину</button>
    </div>
  );
};
