import React, { useEffect } from "react";
import { Card } from "../components/Card/Card";
import axios from "../axios";

export const Catalog = () => {
  const filterList = [
    "Все товары",
    "Кольцевые механизмы",
    "Бумага",
    "Инструменты и комплектующие",
    "Декор",
    "Клеевые материалы",
  ];

  useEffect(() => {
    axios.get("/scrap").then((res) => console.log(res.data));
  }, []);

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
      </div>
    </div>
  );
};
