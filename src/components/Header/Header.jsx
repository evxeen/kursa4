import s from './Header.module.scss';
import {useState} from "react";
import {Link} from "react-router-dom";

export const Header = () => {
   const menuList = [
      {name: 'Каталог', path: '/'},
      {name: 'О компании', path: '/about'},
      {name: 'Информация о доставке и оплате', path: '/delivery'}
   ];

   const [activeElement, setActiveElement] = useState(menuList[0]);
   const [activeCart, setActiveCart] = useState(false);

   const selectActiveElement = (element) => {
      setActiveElement(element);
      setActiveCart(false);
   };

   const selectCart = () => {
      setActiveCart(true);
      setActiveElement('');
   };

   return (
       <section className={s.header}>
          <div className={s.logo}>
             <img src="/logo.png" alt="logo"/>
          </div>
          <ul className={s.menu}>
             {menuList.map((el) => (
                 <Link to={el.path} key={el.name}
                       className={`${s.link} ${el.name === activeElement.name ? s.active : ''}`}
                       onClick={() => selectActiveElement(el)}
                 >
                    {el.name}
                 </Link>
             ))}
          </ul>
          <div className={s.card}>
             <Link to="/cart" onClick={selectCart}>
                <img className={activeCart ? s.activeCart : ''}
                     src="/4105931-add-to-cart-buy-cart-sell-shop-shopping-cart_113919.svg"
                     alt="cart"
                />
             </Link>
          </div>
       </section>
   );
};