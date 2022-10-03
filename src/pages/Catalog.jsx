import React from "react";

export const Catalog = () => {
  const filterList = [
    "Все товары",
    "Кольцевые механизмы",
    "Бумага",
    "Инструменты и комплектующие",
    "Декор",
    "Клеевые материалы",
  ];

  return (
    <div className="catalog_wrap">
      <div className="catalog_filters">
        <ul>
          {filterList.map((el) => (
            <li>{el}</li>
          ))}
        </ul>
      </div>
      <div className="catalog_products">qweqwe</div>
    </div>
  );
};
