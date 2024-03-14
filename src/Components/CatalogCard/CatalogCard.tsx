import { ICatalogItem } from "../../types/ICatalogItem";
import styles from "./CatalogCard.module.scss";
import CartIcon from "../../assets/Icons/cart-icon.svg";
import FavoriteIcon from "../../assets/Icons/favorite-icon.svg";
import Button from "../../UI/Button/Button";
import useCart from "../../hooks/useCart";

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

  return (
    <div className={styles["catalog__card"]}>
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

      <div className={styles["card__icons"]}>
        <Button
          onClick={() => addToCartHandler("increment")}
          variant="default"
          className={styles["card__button"]}
        >
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
