import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calcItemsSelector } from "../../redux/calcReducer/selectors";
import {
  setButtonCalc,
  setConstructorCalc,
} from "../../redux/calcReducer/slice";

import styles from "./ResResultButton.module.scss";

const ResResultButton: FC = () => {
  const dispatch = useDispatch();

  const { isConstructor } = useSelector(calcItemsSelector);

  const removeResultButton = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.detail === 2) {
      dispatch(setButtonCalc(false));
      dispatch(setConstructorCalc(true));
    }
  };

  return (
    <div
      className={styles.res_button}
      onClick={removeResultButton}
      draggable={true}
    >
      <button className={styles.equals}>=</button>
    </div>
  );
};

export default ResResultButton;
