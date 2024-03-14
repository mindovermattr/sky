import styles from "./layout.module.scss";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { useState } from "react";
import { ICatalogItem } from "../../types/ICatalogItem";

const Layout = () => {
  const [cartItems, setCartItems] = useState<ICatalogItem[]>([]);
  return (
    <>
      <main className={styles.layout}>
        <CartContext.Provider
          value={{ cart: cartItems, setCartFunction: setCartItems }}
        >
          <Header />
          <Outlet />
        </CartContext.Provider>
      </main>
    </>
  );
};

export default Layout;
