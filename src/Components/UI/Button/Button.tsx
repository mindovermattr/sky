import { ComponentPropsWithoutRef } from "react";
import styles from "./Button.module.scss";

interface IButton extends ComponentPropsWithoutRef<"button"> {
  variant: "contained" | "outlined" | "text" | "default";
}

const buttonVariants = {
  contained: styles["button--contained"],
  outlined: styles["button--outlined"],
  text: styles["button--text"],
  default: "",
};

const Button = ({ children, variant, className, ...props }: IButton) => {
  return (
    <button
      {...props}
      className={`${styles.button} ${buttonVariants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
