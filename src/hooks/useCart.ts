import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ICatalogItem } from "../types/ICatalogItem";

interface IUseCartItem extends Omit<ICatalogItem, "quantity"> {}

type IOption = "increment" | "decrement" | "delete";

const useCart = ({ ...cartItem }: IUseCartItem) => {
  const { cart, setCartFunction } = useContext(CartContext);

  const index = cart.findIndex((item) => item.id === cartItem.id);

  return (opt: IOption) => {
    if (index === -1) {
      setCartFunction([...cart, { ...cartItem, quantity: 1 }]);
      return;
    }
    switch (opt) {
      case "increment": {
        const items = cart.toSpliced(index, 1, {
          ...cartItem,
          quantity: cart[index].quantity + 1,
        });
        setCartFunction(items);
        break;
      }
      case "decrement": {
        const items = cart.toSpliced(index, 1, {
          ...cartItem,
          quantity: cart[index].quantity - 1,
        });
        setCartFunction(items);
        break;
      }
      case "delete": {
        const items = cart.toSpliced(index, 1);
        setCartFunction(items);
        break;
      }
      default:
        break;
    }
  };
};

export default useCart;
