import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../store/slices/cartSlice";

export const WindowInfo = () => {
  const { cartList } = useSelector((state) => state.cartSlice);
  const { products } = useSelector((state) => state.productsSlice);
  const dispatch = useDispatch();
  const [product, setProduct] = useState();
  const { id } = useParams();

  useEffect(() => {
    const data = products.find((prod) => prod.id === Number(id));
    setProduct(data);
  }, [product]);

  if (!product) {
    return "Загрузка";
  }

  const addToCart = (src, title, price, id) => {
    const product = {
      src,
      title,
      price,
      id,
      count: 1,
    };

    const checkingForAvailability = cartList.find(
      (product) => product.id === id
    );

    if (checkingForAvailability) {
      alert("Вы уже добавили этот товар в корзину");
      return;
    }

    dispatch(addProduct(product));
  };

  return (
    <div className="info_wrapper">
      <div className="info_image">
        <img src={product.src} alt="" />
      </div>
      <div className="info_data">
        <p>{product.title}</p>
        <p>Цена: {product.price}</p>
        <p className="info_data-desc">{product.description}</p>
        <button
          onClick={() =>
            addToCart(product.src, product.title, product.price, product.id)
          }
        >
          В корзину
        </button>
      </div>
    </div>
  );
};
