import { FC } from "react";
import { useSelector } from "react-redux";
import { calcItemsSelector } from "../../redux/calcReducer/slice";

import styles from "./CalcOperations.module.scss";

const CalcOperations: FC = () => {
  const { operationsMoved } = useSelector(calcItemsSelector);

  return (
    <div
      className={styles.calc_operations}
      draggable={!operationsMoved}
      style={{ opacity: operationsMoved ? 0.3 : 1 }}
    >
      <button>/</button>
      <button>x</button>
      <button>-</button>
      <button>+</button>
    </div>
  );
};

export default CalcOperations;
