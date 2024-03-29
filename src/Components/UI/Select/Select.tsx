import { ComponentPropsWithoutRef, ReactNode } from "react";
import styles from "./Select.module.scss";

interface ISelect extends ComponentPropsWithoutRef<"select"> {
  children: ReactNode;
}

const Select = ({ children, className, ...props }: ISelect) => {
  return (
    <div className={`${styles["select__wrapper"]} ${className}`}>
      <select {...props} className={styles.select}>
        {children}
      </select>
    </div>
  );
};

export default Select;
