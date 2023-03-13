import { FC } from "react";

import styles from "./ConstructorCalc.module.scss";

import CalcDisplay from "../CalcDisplay";
import CalcOperations from "../CalcOperations";
import CalcNumbers from "../CalcNumbers";
import CalcResultButton from "../CalcResultButton";

const ConstructorCalc: FC = () => {
  return (
    <div className={styles.constructor_calc}>
      <CalcDisplay />
      <CalcOperations />
      <CalcNumbers />
      <CalcResultButton />
    </div>
  );
};

export default ConstructorCalc;
