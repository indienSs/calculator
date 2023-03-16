import { configureStore } from "@reduxjs/toolkit";
import calcElementsSlice from "./calcReducer/slice";
import calcVariablesSlice from "./calcVariablesReducer/slice";

const store = configureStore({
  reducer: {
    calculator: calcElementsSlice,
    variables: calcVariablesSlice
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
