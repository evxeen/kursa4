import axios from "../../axios";
import s from "./Catalog.module.scss";
import { Card } from "../Card/Card";
import { useEffect, useState } from "react";

export const Catalog = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/scrap")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className={s.catalog}>
      {data
        ? data.map((product) => <Card key={product.id} data={product} />)
        : "нет данных"}
    </div>
  );
};
