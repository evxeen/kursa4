import s from './Header.module.scss';
import {useState} from "react";

export const Header = () => {
   const menuList = ['Каталог', 'О компании', 'Сотрудничество', 'Контакты'];
   const [activeElement, setActiveElement] = useState(menuList[0]);


   const selectActiveElement = (element) => {
      setActiveElement(element);
   };

   return (
       <section className={s.header}>
          <div className={s.logo}>
             <img src='/logo.png' alt='logo'/>
          </div>
             <ul className={s.menu}>
                {menuList.map((el) => (
                    <li key={el} className={el === activeElement ? s.active : ''} onClick={() => selectActiveElement(el)}>{el}</li>
                ))}
             </ul>
          <div className={s.card}>
             <img src="/4105931-add-to-cart-buy-cart-sell-shop-shopping-cart_113919.svg" alt="cart"/>
          </div>
       </section>
   );
};