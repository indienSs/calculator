import { FC } from "react";
import { useSelector } from "react-redux";
import { calcItemsSelector } from "../../redux/calcReducer/slice";

import styles from "./CalcResultButton.module.scss";

const CalcResultButton: FC = () => {
  const { resultButtonMoved } = useSelector(calcItemsSelector);

  return (
    <div
      className={styles.calc_button}
      draggable={!resultButtonMoved}
      style={{ opacity: resultButtonMoved ? 0.3 : 1 }}
    >
      <button className={styles.equals}>=</button>
    </div>
  );
};

export default CalcResultButton;
