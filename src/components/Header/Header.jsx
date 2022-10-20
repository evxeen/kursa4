import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../../store/slices/menuSlice";
import s from "./Header.module.scss";

export const Header = () => {
  const dispatch = useDispatch();
  const { activeCart } = useSelector((state) => state.menuSlice);

  return (
    <section className={s.header}>
      <div className={s.logo}>
        <img src="/logo.png" alt="logo" />
      </div>
      <div className={s.card}>
        <Link to="/cart" onClick={() => dispatch(selectCart(true))}>
          <img
            className={activeCart ? s.activeCart : ""}
            src="/4105931-add-to-cart-buy-cart-sell-shop-shopping-cart_113919.svg"
            alt="cart"
          />
        </Link>
      </div>
    </section>
  );
};
