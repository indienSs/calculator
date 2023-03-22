import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calcItemsSelector } from "../../redux/calcReducer/selectors";
import {
  setConstructorCalc,
  setNumbersCalc,
} from "../../redux/calcReducer/slice";
import { calcVariablesSelector } from "../../redux/calcVariablesReducer/selectors";
import {
  setFirstNumber,
  setSecondNumber,
} from "../../redux/calcVariablesReducer/slice";

import styles from "./ResNumbers.module.scss";

const ResNumbers: FC = () => {
  const dispatch = useDispatch();

  const { isConstructor } = useSelector(calcItemsSelector);
  const { firstNumber, secondNumber, operation } = useSelector(
    calcVariablesSelector
  );

  const removeNumbers = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.detail === 2) {
      if (isConstructor) {
        dispatch(setNumbersCalc(false));
        dispatch(setConstructorCalc(true));
      }
    }
  };

  const showNumber = (e: any) => {
    const resNumber: string = e.target.innerHTML;
    if (!isConstructor) {
      if (firstNumber.length < 9) dispatch(setFirstNumber(resNumber));
    }
  };

  return (
    <div
      className={styles.res_numbers}
      onClick={removeNumbers}
      draggable={isConstructor}
    >
      <button onClick={showNumber}>7</button>
      <button onClick={showNumber}>8</button>
      <button onClick={showNumber}>9</button>
      <button onClick={showNumber}>4</button>
      <button onClick={showNumber}>5</button>
      <button onClick={showNumber}>6</button>
      <button onClick={showNumber}>1</button>
      <button onClick={showNumber}>2</button>
      <button onClick={showNumber}>3</button>
      <button className={styles.zero_button} onClick={showNumber}>
        0
      </button>
      <button onClick={showNumber}>,</button>
    </div>
  );
};

export default ResNumbers;
