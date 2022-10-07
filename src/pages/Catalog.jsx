import React, { useEffect, useState } from "react";
import { Card } from "../components/Card/Card";
import axios from "../axios";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../store/slices/productsSlice";

export const Catalog = () => {
  const { products } = useSelector((state) => state.productsSlice);
  const dispatch = useDispatch();
  const [filteredProducts, setFilteredProducts] = useState([]);

  const filterList = [
    { name: "Все товары", filterBy: 0 },
    { name: "Кольцевые механизмы", filterBy: 1 },
    { name: "Бумага", filterBy: 2 },
    { name: "Инструменты и комплектующие", filterBy: 3 },
    { name: "Декор", filterBy: 4 },
    { name: "Клеевые материалы", filterBy: 5 },
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
      return;
    }
    const filtered = products.filter((prod) => prod.category === filteredBy);
    setFilteredProducts(filtered);
  };

  return (
    <div className="catalog_wrap">
      <div className="catalog_filters">
        <ul>
          {filterList.map((el) => (
            <li key={el.filterBy} onClick={() => filter(el.filterBy)}>
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
