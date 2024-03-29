import Counter from "../UI/Counter/Counter";
import { ICatalogItem } from "../../types/ICatalogItem";
import styles from "./CartItem.module.scss";
import useCart from "../../hooks/useCart";
import CartItemInfo from "../CartItemInfo/CartItemInfo";

interface ICartItemProps extends ICatalogItem {}

const CartItem = (props: ICartItemProps) => {
  const cartHandler = useCart({ ...props });

  return (
    <div className={styles["cart__item"]}>
      <div className={styles["cart__line"]} />
      <CartItemInfo {...props} />
      <div className={styles["cart__quantity"]}>
        <Counter
          setFunctionOnIncrement={() => cartHandler("increment")}
          setFunctionOnDecrement={() => cartHandler("decrement")}
          max={20}
          min={1}
          quantity={props.quantity}
        />
      </div>
    </div>
  );
};

export default CartItem;
