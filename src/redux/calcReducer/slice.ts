import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CalcReady } from "./types";

const initialState: CalcReady = {
  displayMoved: true,
  numbersMoved: true,
  operationsMoved: true,
  resultButtonMoved: true,
  isConstructor: true,
};

export const calcElementsSlice = createSlice({
  name: "calcElements",
  initialState,
  reducers: {
    setDisplayCalc: (state, action: PayloadAction<boolean>) => {
      state.displayMoved = action.payload;
    },
    setNumbersCalc: (state, action: PayloadAction<boolean>) => {
      state.numbersMoved = action.payload;
    },
    setOperationsCalc: (state, action: PayloadAction<boolean>) => {
      state.operationsMoved = action.payload;
    },
    setButtonCalc: (state, action: PayloadAction<boolean>) => {
      state.resultButtonMoved = action.payload;
    },
    setConstructorCalc: (state, action: PayloadAction<boolean>) => {
      state.isConstructor = action.payload;
    },
  },
});

export const {
  setDisplayCalc,
  setNumbersCalc,
  setOperationsCalc,
  setButtonCalc,
  setConstructorCalc,
} = calcElementsSlice.actions;

export default calcElementsSlice.reducer;
