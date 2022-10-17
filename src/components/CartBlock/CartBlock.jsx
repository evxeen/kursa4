import s from "./CartBlock.module.scss";
import React from "react";

export const CartBlock = () => {
  return (
    <div className={s.block}>
      <div>
        <img src="/logo.png" />
        <span>name</span>
      </div>
      <span>колличесвто</span>
      <span>общаяя стоимость</span>
      <button>удалить</button>
    </div>
  );
};
