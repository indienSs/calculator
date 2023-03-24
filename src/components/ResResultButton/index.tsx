import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doOperation } from "../../static/doOperation";
import { calcItemsSelector } from "../../redux/calcReducer/selectors";
import {
  setButtonCalc,
  setConstructorCalc,
} from "../../redux/calcReducer/slice";
import { calcVariablesSelector } from "../../redux/calcVariablesReducer/selectors";
import {
  resetFirstNumber,
  resetSecondNumber,
  setOperation,
} from "../../redux/calcVariablesReducer/slice";

import styles from "./ResResultButton.module.scss";

const ResResultButton: FC = () => {
  const dispatch = useDispatch();

  const { isConstructor } = useSelector(calcItemsSelector);
  const { firstNumber, secondNumber, operation } = useSelector(
    calcVariablesSelector
  );

  const removeResultButton = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.detail === 2) {
      if (isConstructor) {
        dispatch(setButtonCalc(false));
        dispatch(setConstructorCalc(true));
      }
    }
    if (operation) {
      const res: string = doOperation(firstNumber, secondNumber, operation);
      dispatch(resetFirstNumber(res));
      dispatch(resetSecondNumber("0"));
      dispatch(setOperation(""));
    }
  };

  return (
    <div
      className={styles.res_button}
      onClick={removeResultButton}
      draggable={isConstructor}
    >
      <button className={styles.equals}>=</button>
    </div>
  );
};

export default ResResultButton;
