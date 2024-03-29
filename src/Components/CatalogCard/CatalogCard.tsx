import { ICatalogItem } from "../../types/ICatalogItem";
import styles from "./CatalogCard.module.scss";
import CartIcon from "../../assets/Icons/cart-icon.svg";
import FavoriteIcon from "../../assets/Icons/favorite-icon.svg";
import Button from "../UI/Button/Button";
import useCart from "../../hooks/useCart";
import { useState } from "react";

interface ICatalogCardProps extends ICatalogItem {}

const CatalogCard = ({
  id,
  title,
  price,
  image,
  description,
}: ICatalogCardProps) => {
  const addToCartHandler = useCart({
    id,
    title,
    price,
    image,
    description,
  });

  const [isIconsVisible, setIsIconsVisible] = useState(false);

  const onMouseLeaveHandler = () => {
    setIsIconsVisible(false);
  };

  const onMouseEnterHandler = () => {
    setIsIconsVisible(true);
  };

  return (
    <div
      onMouseLeave={onMouseLeaveHandler}
      onMouseEnter={onMouseEnterHandler}
      className={styles["catalog__card"]}
    >
      <img
        className={styles["card__image"]}
        src={image}
        alt={`Картинка товара: ${title}`}
      />
      <h3 className={styles["card__title"]}>{title}</h3>
      <p className={styles["card__description"]}>{description}</p>
      <p className={styles["card__price"]}>
        {price.toLocaleString("ru-RU")} руб.
      </p>

      <div
        className={`${styles["card__icons"]}  ${
          isIconsVisible
            ? styles["card__icons--visible"]
            : styles["card__icons--hidden"]
        }`}
      >
        <Button onClick={() => addToCartHandler("increment")} variant="default">
          <img src={CartIcon} alt="Иконка корзины" />
        </Button>
        <Button variant="default">
          <img src={FavoriteIcon} alt="Иконка избранного" />
        </Button>
      </div>
    </div>
  );
};

export default CatalogCard;
