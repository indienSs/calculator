import { FC } from "react";

import styles from "./ConstructorCalc.module.scss";

import CalcDisplay from "../CalcDisplay";
import CalcOperations from "../CalcOperations";
import CalcNumbers from "../CalcNumbers";
import CalcResultButton from "../CalcResultButton";
import { useSelector } from "react-redux";
import { calcItemsSelector } from "../../redux/calcReducer/selectors";

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
