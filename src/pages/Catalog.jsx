import React from "react";
import { Card } from "../components/Card/Card";

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
            <li key={el}>{el}</li>
          ))}
        </ul>
      </div>
      <div className="catalog_products">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
