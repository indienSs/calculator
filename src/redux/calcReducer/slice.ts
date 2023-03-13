import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CalcReady } from "./types";

const initialState: CalcReady = {
  displayMoved: false,
  numbersMooved: false,
  operationsMoved: false,
  resultButtonMoved: false,
};

export const calcElementsSlice = createSlice({
  name: "calcElements",
  initialState,
  reducers: {
    setDisplayCalc: (state) => {
      state.displayMoved = true;
    },
    setNumbersCalc: (state) => {
      state.numbersMooved = true;
    },
    setOperationsCalc: (state) => {
      state.operationsMoved = true;
    },
    setButtonCalc: (state) => {
      state.resultButtonMoved = true;
    },
  },
});

export const {
  setDisplayCalc,
  setNumbersCalc,
  setOperationsCalc,
  setButtonCalc,
} = calcElementsSlice.actions;

export default calcElementsSlice.reducer;
