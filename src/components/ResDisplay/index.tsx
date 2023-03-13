import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calcItemsSelector } from "../../redux/calcReducer/selectors";
import {
  setConstructorCalc,
  setDisplayCalc,
} from "../../redux/calcReducer/slice";

import styles from "./ResDisplay.module.scss";

const ResDisplay: FC = () => {
  const dispatch = useDispatch();
  const { isConstructor } = useSelector(calcItemsSelector);

  const removeDisplay = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.detail === 2) {
      dispatch(setDisplayCalc(false));
      dispatch(setConstructorCalc(true));
    }
  };

  return (
    <div className={styles.res_display} onClick={removeDisplay}>
      <div className={styles.numbers}>
        <h3>0</h3>
      </div>
    </div>
  );
};

export default ResDisplay;
