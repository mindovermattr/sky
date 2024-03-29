import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import CartItemInfo from "../CartItemInfo/CartItemInfo";

const Header = () => {
  const { cart } = useContext(CartContext);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const { pathname } = useLocation();

  const onMouseEnterHandler = () => {
    if (pathname === "/cart") return;
    setIsVisible(true);
  };
  const onMouseLeaveHandler = () => {
    if (pathname === "/cart") return;
    setIsVisible(false);
  };

  return (
    <header className={styles.header}>
      <h1 className={styles["header__title"]}>
        <Link to="/sky">Интерьер.</Link>
      </h1>
      <nav className={styles["header__nav"]}>
        <ul className={styles["header__list"]}>
          <li className={styles["list__item"]}>
            <Link to="/sky">Каталог</Link>
          </li>
          <li
            onMouseEnter={onMouseEnterHandler}
            onMouseLeave={onMouseLeaveHandler}
            onClick={() => setIsVisible(false)}
            className={styles["list__item"]}
          >
            <Link to="/sky/cart">Корзина</Link>
            <div
              className={`${styles["list__cart"]} ${
                isVisible && cart.length ? styles["list__cart--active"] : ""
              }`}
            >
              {cart.map((cartItem) => (
                <div key={cartItem.id} className={styles["cart__wrapper"]}>
                  <CartItemInfo {...cartItem} />
                </div>
              ))}
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
