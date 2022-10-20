import React from "react";
import { CartBlock } from "../components/CartBlock/CartBlock";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCart } from "../store/slices/menuSlice";
import { removeData } from "../store/slices/cartSlice";

export const Cart = () => {
  const dispatch = useDispatch();
  const { cartList } = useSelector((state) => state.cartSlice);

  const order = () => {
    const totalCount = cartList.reduce((sum, item) => sum + +item.price, 0);
    alert(`
     Заказ оформлен!
     ${cartList.map((product) => {
       return `
         ${product.title}, ${product.count} шт.
        `;
     })}
     Общая стоимость ${totalCount} р.
     `);

    dispatch(removeData());
  };

  return (
    <div className="cart_wrapper">
      <div className="order">
        <Link to="/" onClick={() => dispatch(selectCart(false))}>
          Назад
        </Link>
        <button onClick={order}>Оформить заказ</button>
      </div>
      <div>
        {cartList.length !== 0
          ? cartList.map((el) => <CartBlock key={el.id} {...el} />)
          : "Вы пока ничего не добавили в корзину."}
      </div>
    </div>
  );
};
