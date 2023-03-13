import { FC, useRef } from "react";

import styles from "./ResultCalc.module.scss";

import addItem from "../../assets/img/add-element.png";
import { useSelector } from "react-redux/es/exports";
import { calcItemsSelector } from "../../redux/calcReducer/selectors";
import CalcDisplay from "../CalcDisplay";
import CalcOperations from "../CalcOperations";
import CalcNumbers from "../CalcNumbers";
import CalcResultButton from "../CalcResultButton";

const ResultCalc: FC = () => {
  const { displayMoved, numbersMooved, operationsMoved, resultButtonMoved } =
    useSelector(calcItemsSelector);

  const noMoved: boolean =
    displayMoved && numbersMooved && operationsMoved && resultButtonMoved;

  const handleClickForm = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e.target);
    console.log(resultForm);
  };

  const resultForm = useRef(null);

  if (!noMoved) {
    return (
      <div
        className={styles.result_empty}
        onClick={handleClickForm}
        ref={resultForm}
      >
        <img src={addItem} alt="move-form" />
      </div>
    );
  }

  return (
    <div>
      {displayMoved && <CalcDisplay />}
      <div>
        {operationsMoved && <CalcOperations />}
        {numbersMooved && <CalcNumbers />}
        {resultButtonMoved && <CalcResultButton />}
      </div>
    </div>
  );
};

export default ResultCalc;
