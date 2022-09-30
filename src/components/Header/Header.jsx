import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectMenuElement, selectCart} from "../../store/slices/menuSlice";
import s from './Header.module.scss';

export const Header = () => {
   const menuList = [
      {name: 'Каталог', path: '/'},
      {name: 'О компании', path: '/about'},
      {name: 'Информация о доставке и оплате', path: '/delivery'}
   ];

   const activeMenuElement = useSelector(state => state.reducer.activeMenuElement);
   const activeCart = useSelector(state => state.reducer.activeCart);
   const dispatch = useDispatch();

   const handlerSelectMenuElement = (element) => {
      dispatch(selectMenuElement(element));
   }

   const handlerSelectCart = () => {
      dispatch(selectCart(true));
   }

   return (
       <section className={s.header}>
          <div className={s.logo}>
             <img src="/logo.png" alt="logo"/>
          </div>
          <ul className={s.menu}>
             {menuList.map((el) => (
                 <Link to={el.path} key={el.name}
                       className={`${s.link} ${el.name === activeMenuElement.name ? s.active : ''}`}
                       onClick={() => handlerSelectMenuElement(el)}
                 >
                    {el.name}
                 </Link>
             ))}
          </ul>
          <div className={s.card}>
             <Link to="/cart" onClick={handlerSelectCart}>
                <img className={activeCart ? s.activeCart : ''}
                     src="/4105931-add-to-cart-buy-cart-sell-shop-shopping-cart_113919.svg"
                     alt="cart"
                />
             </Link>
          </div>
       </section>
   );
};