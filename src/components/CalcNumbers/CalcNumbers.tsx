import { FC } from "react";
import { useSelector } from "react-redux";
import { calcItemsSelector } from "../../redux/calcReducer/slice";

import styles from "./CalcNumbers.module.scss";

const CalcNumbers: FC = () => {
  const { numbersMoved } = useSelector(calcItemsSelector);
  return (
    <div
      className={styles.calc_numbers}
      draggable={!numbersMoved}
      style={{ opacity: numbersMoved ? 0.3 : 1 }}
    >
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button className={styles.zero_button}>0</button>
      <button>.</button>
    </div>
  );
};

export default CalcNumbers;
