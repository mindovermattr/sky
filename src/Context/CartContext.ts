import { Dispatch, SetStateAction, createContext } from "react";
import { ICatalogItem } from "../types/ICatalogItem";

interface ICartContext {
  cart: ICatalogItem[];
  setCartFunction: Dispatch<SetStateAction<ICatalogItem[]>>;
}

export const CartContext = createContext<ICartContext>({} as ICartContext);
