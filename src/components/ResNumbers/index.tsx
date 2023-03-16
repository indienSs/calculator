import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calcItemsSelector } from "../../redux/calcReducer/selectors";
import {
  setConstructorCalc,
  setNumbersCalc,
} from "../../redux/calcReducer/slice";

import styles from "./ResNumbers.module.scss";

const ResNumbers: FC = () => {
  const dispatch = useDispatch();

  const { isConstructor } = useSelector(calcItemsSelector);

  const removeNumbers = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.detail === 2) {
      if (isConstructor) {
        dispatch(setNumbersCalc(false));
        dispatch(setConstructorCalc(true));
      }
    }
  };

  return (
    <div
      className={styles.res_numbers}
      onClick={removeNumbers}
      draggable={true}
    >
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button className={styles.zero_button}>0</button>
      <button>,</button>
    </div>
  );
};

export default ResNumbers;
