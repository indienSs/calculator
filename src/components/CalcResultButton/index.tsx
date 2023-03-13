import { FC } from "react";

import styles from "./CalcResultButton.module.scss";

const CalcResultButton: FC = () => {
  return (
    <div className={styles.calc_button} draggable={true}>
      <button className={styles.equals}>=</button>
    </div>
  );
};

export default CalcResultButton;
