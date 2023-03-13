import { FC, useRef, useState } from "react";

import ResultCalc from "./components/ResultCalc";
import ConstructorCalc from "./components/ConstructorCalc";
import runtime from "./assets/img/runtime.png";
import constructor from "./assets/img/constructor.png";

const App: FC = () => {
  const [isConstructor, setIsConstructor] = useState<boolean>(true);

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
              onClick={() => setIsConstructor((prev) => !prev)}
            />
            <ResultCalc />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
