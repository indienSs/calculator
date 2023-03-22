import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calcItemsSelector } from "../../redux/calcReducer/selectors";
import {
  setConstructorCalc,
  setOperationsCalc,
} from "../../redux/calcReducer/slice";

import styles from "./ResOperations.module.scss";

const ResOperations: FC = () => {
  const dispatch = useDispatch();

  const { isConstructor } = useSelector(calcItemsSelector);

  const removeOperations = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.detail === 2) {
      if (isConstructor) {
        dispatch(setOperationsCalc(false));
        dispatch(setConstructorCalc(true));
      }
    }
  };

  const showOperation = (e: any) => {
    if (!isConstructor) {
      const resOperation = e.target.innerHTML;
      console.log(resOperation);
    }
  };

  return (
    <div
      className={styles.res_operations}
      onClick={removeOperations}
      draggable={isConstructor}
    >
      <button onClick={showOperation}>/</button>
      <button onClick={showOperation}>x</button>
      <button onClick={showOperation}>-</button>
      <button onClick={showOperation}>+</button>
    </div>
  );
};

export default ResOperations;
