import { FC } from "react";

import styles from "./ConstructorCalc.module.scss";

import CalcDisplay from "../CalcDisplay/CalcDisplay";
import CalcOperations from "../CalcOperations/CalcOperations";
import CalcNumbers from "../CalcNumbers/CalcNumbers";
import CalcResultButton from "../CalcResultButton/CalcResultButton";
import { useSelector } from "react-redux";
import { calcItemsSelector } from "../../redux/calcReducer/slice";

const ConstructorCalc: FC = () => {
  const { isConstructor } = useSelector(calcItemsSelector);

  return (
    <div className={styles.constructor_calc}>
      {isConstructor && (
        <>
          <CalcDisplay />
          <CalcOperations />
          <CalcNumbers />
          <CalcResultButton />
        </>
      )}
    </div>
  );
};

export default ConstructorCalc;
