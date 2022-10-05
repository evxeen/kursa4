import React, { useEffect } from "react";
import { Card } from "../components/Card/Card";
import axios from "../axios";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../store/slices/productsSlice";

export const Catalog = () => {
  const { products } = useSelector((state) => state.productsSlice);
  const dispatch = useDispatch();

  const filterList = [
    "Все товары",
    "Кольцевые механизмы",
    "Бумага",
    "Инструменты и комплектующие",
    "Декор",
    "Клеевые материалы",
  ];

  useEffect(() => {
    axios.get("/scrap").then((res) => dispatch(addProducts(res.data)));
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
        {products.map((prod) => (
          <Card key={prod.id} {...prod} />
        ))}
      </div>
    </div>
  );
};
