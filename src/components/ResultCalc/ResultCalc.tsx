import { FC, useRef } from "react";

import styles from "./ResultCalc.module.scss";

import addItem from "../../assets/img/add-element.png";
import { useSelector } from "react-redux/es/exports";
import { calcItemsSelector } from "../../redux/calcReducer/slice";
import ResDisplay from "../ResDisplay/ResDisplay";
import ResOperations from "../ResOperations/ResOperations";
import ResNumbers from "../ResNumbers/ResNumbers";
import ResResultButton from "../ResResultButton/ResResultButton";

const ResultCalc: FC = () => {
  const { displayMoved, numbersMoved, operationsMoved, resultButtonMoved } =
    useSelector(calcItemsSelector);

  const noMoved: boolean =
    displayMoved || numbersMoved || operationsMoved || resultButtonMoved;

  const resultForm = useRef(null);

  if (!noMoved) {
    return (
      <div className={styles.result_empty} ref={resultForm}>
        <img src={addItem} alt="move-form" />
      </div>
    );
  }

  return (
    <div className={styles.result_filled}>
      {displayMoved && <ResDisplay />}
      <div className={styles.movable_items}>
        {operationsMoved && <ResOperations />}
        {numbersMoved && <ResNumbers />}
        {resultButtonMoved && <ResResultButton />}
      </div>
    </div>
  );
};

export default ResultCalc;
