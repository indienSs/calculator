import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calcItemsSelector } from "../../redux/calcReducer/selectors";
import { setConstructorCalc, setOperationsCalc } from "../../redux/calcReducer/slice";

import styles from "./ResOperations.module.scss";

const ResOperations: FC = () => {
  const dispatch = useDispatch();

  const { isConstructor } = useSelector(calcItemsSelector);

  const removeOperations = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.detail === 2) {
      dispatch(setOperationsCalc(false));
      dispatch(setConstructorCalc(true));
    }
  };

  return (
    <div
      className={styles.res_operations}
      onClick={removeOperations}
      draggable={true}
    >
      <button>/</button>
      <button>x</button>
      <button>-</button>
      <button>+</button>
    </div>
  );
};

export default ResOperations;
