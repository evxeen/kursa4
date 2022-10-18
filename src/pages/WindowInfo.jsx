import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const WindowInfo = () => {
  const { products } = useSelector((state) => state.productsSlice);
  const [product, setProduct] = useState();

  const { id } = useParams();

  useEffect(() => {
    const data = products.find((prod) => prod.id === Number(id));
    setProduct(data);
  }, [product]);

  if (!product) {
    return "Загрузка";
  }

  return (
    <div className="info_wrapper">
      <div className="info_image">
        <img src={product.src} alt="" />
      </div>
      <div className="info_data">
        <p>{product.title}</p>
        <p>Цена: {product.price}</p>
        <p className="info_data-desc">{product.description}</p>
        <button>В корзину</button>
      </div>
    </div>
  );
};
