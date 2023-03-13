import { FC } from "react";

import styles from "./CalcDisplay.module.scss";

const CalcDisplay: FC = () => {
  return (
    <div className={styles.calc_display} draggable={true}>
      <div className={styles.numbers}>
        <h3>0</h3>
      </div>
    </div>
  );
};

export default CalcDisplay;
