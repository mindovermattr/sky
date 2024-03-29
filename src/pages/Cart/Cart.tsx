import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import styles from "./Cart.module.scss";
import CartItem from "../../Components/CartItem/CartItem";
import Button from "../../Components/UI/Button/Button";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, setCartFunction } = useContext(CartContext);
  const sum = cart.reduce(
    (acc, cartItem) => acc + cartItem.price * cartItem.quantity,
    0
  );

  const navigate = useNavigate();

  const clearCartHandler = () => {
    setCartFunction([]);
  };

  return (
    <div className={styles["cart"]}>
      {cart.length === 0 ? (
        <div className={styles["cart__empty"]}>Корзина пуста</div>
      ) : (
        <div className={styles["cart__menu"]}>
          <div className={styles["cart__header"]}>
            <p>Товар</p>
            <p>К-во</p>
          </div>
          <div className={styles["cart__items"]}>
            {cart.map((cartItem) => (
              <CartItem {...cartItem} key={cartItem.id} />
            ))}
          </div>
          <div className={styles["cart__controls"]}>
            <Button
              onClick={clearCartHandler}
              className={styles["cart__button"]}
              variant="outlined"
            >
              Очистить корзину
            </Button>
            <Button
              onClick={() => navigate("/sky")}
              className={`${styles["cart__button"]} ${styles["cart__button--black"]}`}
              variant="contained"
            >
              Продолжить покупку
            </Button>
          </div>
        </div>
      )}
      <form className={styles["cart__form"]}>
        <h3 className={styles["form__title"]}>Оформление заказа</h3>
        <fieldset className={styles["form__wrapper"]}>
          <label className={styles["form__label"]}>
            <input
              className={styles["form__input"]}
              type="text"
              placeholder="Имя Фамилия"
            />
          </label>
          <label className={styles["form__label"]}>
            <input
              className={styles["form__input"]}
              type="tel"
              placeholder="+7 904 000 80 80"
            />
          </label>
          <label className={styles["form__label"]}>
            <input
              className={styles["form__input"]}
              type="text"
              placeholder="Адрес доставки"
            />
          </label>
          <p className={styles["form__price"]}>
            Итого:{" "}
            <span className={styles["form__sum"]}>
              {sum.toLocaleString()} руб.
            </span>
          </p>
          <Button
            type="button"
            className={styles["form__button"]}
            variant="outlined"
          >
            Оформить заказ
          </Button>
        </fieldset>
      </form>
    </div>
  );
};

export default Cart;
