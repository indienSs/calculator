import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CalcVariables } from "./types";

const initialState: CalcVariables = {
  firstNumber: "0",
  secondNumber: "0",
  operation: "",
  started: false,
};

export const calcVariablesSlice = createSlice({
  name: "calcElements",
  initialState,
  reducers: {
    setFirstNumber: (state, action: PayloadAction<string>) => {
      state.firstNumber += action.payload;
    },
    setOperation: (state, action: PayloadAction<string>) => {
      state.operation = action.payload;
    },
    resetFirstNumber: (state, action: PayloadAction<string>) => {
      state.firstNumber = action.payload;
    },
    resetSecondNumber: (state, action: PayloadAction<string>) => {
      state.secondNumber = action.payload;
    },
    setStarted: (state, action: PayloadAction<boolean>) => {
      state.started = action.payload;
    },
  },
});

export const {
  setFirstNumber,
  setOperation,
  resetFirstNumber,
  resetSecondNumber,
  setStarted,
} = calcVariablesSlice.actions;

export default calcVariablesSlice.reducer;
