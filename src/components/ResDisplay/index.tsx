import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calcItemsSelector } from "../../redux/calcReducer/selectors";
import {
  setConstructorCalc,
  setDisplayCalc,
} from "../../redux/calcReducer/slice";
import { calcVariablesSelector } from "../../redux/calcVariablesReducer/selectors";
import {
  resetFirstNumber,
  resetSecondNumber,
  setOperation,
} from "../../redux/calcVariablesReducer/slice";

import styles from "./ResDisplay.module.scss";

const ResDisplay: FC = () => {
  const dispatch = useDispatch();
  const { isConstructor } = useSelector(calcItemsSelector);
  const { firstNumber, secondNumber, operation } = useSelector(
    calcVariablesSelector
  );

  const removeDisplay = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.detail === 2) {
      if (isConstructor) {
        dispatch(setDisplayCalc(false));
        dispatch(setConstructorCalc(true));
      } else {
        dispatch(resetFirstNumber("0"));
        dispatch(resetSecondNumber("0"));
        dispatch(setOperation(""));
      }
    }
  };

  return (
    <div className={styles.res_display} onClick={removeDisplay}>
      <div className={styles.numbers}>
        <h3>{firstNumber}</h3>
      </div>
    </div>
  );
};

export default ResDisplay;
