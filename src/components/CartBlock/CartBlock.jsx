import s from "./CartBlock.module.scss";
import React from "react";

export const CartBlock = ({ src, title, price, id }) => {
  return (
    <div className={s.block}>
      <div>
        <img src={src} alt="image" />
        <span>{title}</span>
      </div>
      <span>колличесвто</span>
      <span>{price}</span>
      <button>удалить</button>
    </div>
  );
};
