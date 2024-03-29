import Button from "../UI/Button/Button";
import styles from "./CartItemInfo.module.scss";
import { ICatalogItem } from "../../types/ICatalogItem";
import useCart from "../../hooks/useCart";

const CartItemInfo = ({
  title,
  description,
  id,
  image,
  price,
}: ICatalogItem) => {
  const deleteCartItemHandler = useCart({
    id,
    description,
    image,
    price,
    title,
  });
  return (
    <>
      <img
        className={styles["cart__image"]}
        src={image}
        alt={`Картинка товара ${title}`}
      />
      <div className={styles["cart__info"]}>
        <h3 className={styles["info__title"]}>{title}</h3>
        <p className={styles["info__description"]}>{description}</p>
        <p className={styles["info__price"]}>{price.toLocaleString()} руб.</p>
        <div className={styles["info__controls"]}>
          <Button className={styles["info__button"]} variant="text">
            Избранные
          </Button>
          <Button
            onClick={() => deleteCartItemHandler("delete")}
            className={styles["info__button"]}
            variant="text"
          >
            Удалить
          </Button>
        </div>
      </div>
    </>
  );
};

export default CartItemInfo;
