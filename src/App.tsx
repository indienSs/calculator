import { FC } from "react";

import ResultCalc from "./components/ResultCalc/ResultCalc";
import ConstructorCalc from "./components/ConstructorCalc/ConstructorCalc";
import runtime from "./assets/img/runtime.png";
import constructor from "./assets/img/constructor.png";
import { useDispatch, useSelector } from "react-redux";
import {
  setConstructorCalc,
  calcItemsSelector,
} from "./redux/calcReducer/slice";

const App: FC = () => {
  const {
    displayMoved,
    numbersMoved,
    operationsMoved,
    resultButtonMoved,
    isConstructor,
  } = useSelector(calcItemsSelector);

  const dispatch = useDispatch();

  const noMoved: boolean =
    displayMoved && numbersMoved && operationsMoved && resultButtonMoved;

  const handleConstructorClick = () => {
    if (noMoved) {
      dispatch(setConstructorCalc(!isConstructor));
    }
  };

  return (
    <div className="app">
      <div className="calc_field">
        <div className="calculators">
          <ConstructorCalc />
          <div>
            <img
              src={isConstructor ? constructor : runtime}
              alt="switch-button"
              className="switch"
              onClick={handleConstructorClick}
            />
            <ResultCalc />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
