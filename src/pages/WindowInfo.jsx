import React from "react";

export const WindowInfo = () => {
  return (
    <div className="info_wrapper">
      <div className="info_image">
        <img src="/logo.png" alt="" />
      </div>
      <div className="info_data">
        <p>Наименование</p>
        <p>Цена: </p>
        <p className="info_data-desc">Описание</p>
        <button>В корзину</button>
      </div>
    </div>
  );
};
