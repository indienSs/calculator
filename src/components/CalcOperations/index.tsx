import { FC } from "react";

import styles from "./CalcOperations.module.scss";

const CalcOperations: FC = () => {
  return (
    <div className={styles.calc_operations} draggable={true}>
      <button>/</button>
      <button>x</button>
      <button>-</button>
      <button>+</button>
    </div>
  );
};

export default CalcOperations;
