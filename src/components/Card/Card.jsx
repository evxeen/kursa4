import s from "./Card.module.scss";

export const Card = ({ data }) => {
  const { src, title, price } = data;

  return (
    <div className={s.card}>
      <img src={src} alt="image" />
      <span>{title}</span>
      <span>{price}</span>
    </div>
  );
};
