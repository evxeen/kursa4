import React from "react";

export const Catalog = () => {
  const filterList = [
    "Все товары",
    "Кольцевые механизмы",
    "Бумага",
    "Инструменты и комплектующие",
    "Декор",
    "Клеевые материалы",
  ];

  return (
    <div className="catalog_wrap">
      <div className="catalog_filters">
        <ul>
          {filterList.map((el) => (
            <li key={el}>{el}</li>
          ))}
        </ul>
      </div>
      <div className="catalog_products">
        <div className="catalog_card">
          <img src="/logo.png" alt="product" />
          <span className="card_name">Наименование</span>
          <span className="card_price">Прайс</span>
          <button>В корзину</button>
        </div>
        <div className="catalog_card">
          <img src="/logo.png" alt="product" />
          <span className="card_name">Наименование</span>
          <span className="card_price">Прайс</span>
          <button>В корзину</button>
        </div>
        <div className="catalog_card">
          <img src="/logo.png" alt="product" />
          <span className="card_name">Наименование</span>
          <span className="card_price">Прайс</span>
          <button>В корзину</button>
        </div>
        <div className="catalog_card">
          <img src="/logo.png" alt="product" />
          <span className="card_name">Наименование</span>
          <span className="card_price">Прайс</span>
          <button>В корзину</button>
        </div>
        <div className="catalog_card">
          <img src="/logo.png" alt="product" />
          <span className="card_name">Наименование</span>
          <span className="card_price">Прайс</span>
          <button>В корзину</button>
        </div>
        <div className="catalog_card">
          <img src="/logo.png" alt="product" />
          <span className="card_name">Наименование</span>
          <span className="card_price">Прайс</span>
          <button>В корзину</button>
        </div>
      </div>
    </div>
  );
};
