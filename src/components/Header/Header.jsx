import s from './Header.module.scss';

export const Header = () => {

   return (
       <section className={s.header}>
          <div className={s.logo}>LOGO</div>

             <ul className={s.menu}>
                <li>Каталог</li>
                <li>О компании</li>
                <li>Сотрудничество</li>
                <li>Контакты</li>
             </ul>

       </section>
   );
};