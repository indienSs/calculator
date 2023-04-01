import { FC } from "react";
import { useSelector } from "react-redux";
import { calcItemsSelector } from "../../redux/calcReducer/slice";

import styles from "./CalcDisplay.module.scss";

const CalcDisplay: FC = () => {
  const { displayMoved } = useSelector(calcItemsSelector);

  return (
    <div
      className={styles.calc_display}
      draggable={!displayMoved}
      style={{ opacity: displayMoved ? 0.3 : 1 }}
    >
      <div className={styles.numbers}>
        <h3>0</h3>
      </div>
    </div>
  );
};

export default CalcDisplay;
