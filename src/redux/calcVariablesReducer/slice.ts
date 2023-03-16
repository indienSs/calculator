import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CalcVariables } from "./types";

const initialState: CalcVariables = {
  firstNumber: "0",
  secondNumber: "0",
  result: "0",
};

export const calcVariablesSlice = createSlice({
  name: "calcElements",
  initialState,
  reducers: {
    setFirstNumber: (state, action: PayloadAction<string>) => {
      state.firstNumber = action.payload;
    },
    setSecondNumber: (state, action: PayloadAction<string>) => {
      state.secondNumber = action.payload;
    },
    setResult: (state, action: PayloadAction<string>) => {
      state.result = action.payload;
    },
  },
});

export const { setFirstNumber, setSecondNumber, setResult } =
  calcVariablesSlice.actions;

export default calcVariablesSlice.reducer;
