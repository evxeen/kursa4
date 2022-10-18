import s from "./Card.module.scss";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../store/slices/cartSlice";
import { Link } from "react-router-dom";

export const Card = ({ src, title, price, id }) => {
  const { cartList } = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch();

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

    console.log(checkingForAvailability);
    if (checkingForAvailability) {
      alert("Вы уже добавили этот товар в корзину");
      return;
    }

    dispatch(addProduct(product));
  };

  return (
    <div className={s.card}>
      <Link to="/info">
        <img src={src} alt="product" />
      </Link>
      <span className={s.name}>{title}</span>
      <span className="card_price">{price} р.</span>
      <button onClick={() => addToCart(src, title, price, id)}>
        В корзину
      </button>
    </div>
  );
};
