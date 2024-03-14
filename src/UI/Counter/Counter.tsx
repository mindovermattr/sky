import {
  ComponentPropsWithoutRef,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import styles from "./Counter.module.scss";
import Button from "../Button/Button";

interface CounterProps extends ComponentPropsWithoutRef<"div"> {
  min: number;
  max: number;
  quantity: number;
  setFunctionOnIncrement: Dispatch<SetStateAction<number>>;
  setFunctionOnDecrement: Dispatch<SetStateAction<number>>;
}

const Counter = ({
  max,
  min,
  quantity,
  setFunctionOnDecrement,
  setFunctionOnIncrement,
  ...props
}: CounterProps) => {
  const [current, setCurrent] = useState<number>(quantity);

  const incrementHandler = () => {
    if (current === max) return;
    setCurrent(current + 1);
    setFunctionOnIncrement(current);
  };

  const decrementHandler = () => {
    if (current === min) return;
    setCurrent(current - 1);
    setFunctionOnDecrement(current);
  };

  return (
    <div {...props} className={`${styles["counter"]}`}>
      <div className={styles["counter__wrapper"]}>
        <div className={styles["counter__value"]}>{current}</div>
        <div className={styles["counter__controls"]}>
          <Button variant="default" onClick={incrementHandler}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 9L8 7L10 9"
                stroke="#CACDD8"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </Button>
          <Button variant="default" onClick={decrementHandler}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 7L8 9L6 7"
                stroke="#CACDD8"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
