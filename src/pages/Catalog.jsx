import React, { useEffect, useState } from "react";
import { Card } from "../components/Card/Card";
import axios from "../axios";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../store/slices/productsSlice";
import { selectFilterElement } from "../store/slices/filterSlice";

export const Catalog = () => {
  const { products } = useSelector((state) => state.productsSlice);
  const { activeFilterElement } = useSelector((state) => state.filterSlice);
  const dispatch = useDispatch();
  const [filteredProducts, setFilteredProducts] = useState([]);

  const filterList = [
    { name: "Все товары" },
    { name: "Кольцевые механизмы" },
    { name: "Бумага" },
    { name: "Инструменты и комплектующие" },
    { name: "Декор" },
    { name: "Клеевые материалы" },
  ];

  useEffect(() => {
    axios.get("/scrap").then((res) => dispatch(addProducts(res.data)));
  }, []);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const filter = (filteredBy) => {
    if (filteredBy === 0) {
      setFilteredProducts(products);
      dispatch(selectFilterElement(0));
      return;
    }
    const filtered = products.filter((prod) => prod.category === filteredBy);
    setFilteredProducts(filtered);
    dispatch(selectFilterElement(filteredBy));
  };

  return (
    <div className="catalog_wrap">
      <div className="catalog_filters">
        <ul>
          {filterList.map((el, index) => (
            <li
              className={`${index === activeFilterElement ? "active" : ""}`}
              key={el.name}
              onClick={() => filter(index)}
            >
              {el.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="catalog_products">
        {filteredProducts.map((prod) => (
          <Card key={prod.id} {...prod} />
        ))}
      </div>
    </div>
  );
};
