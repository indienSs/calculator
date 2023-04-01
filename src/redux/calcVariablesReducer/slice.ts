import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type CalcVariables = {
  firstNumber: string;
  secondNumber: string;
  operation: string;
  started: boolean;
};

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

export const calcVariablesSelector = (store: RootState) => store.variables;

export const variablesReducer = calcVariablesSlice.reducer;
