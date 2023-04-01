import { configureStore } from "@reduxjs/toolkit";
import { calcReducer } from "./calcReducer/slice";
import { variablesReducer } from "./calcVariablesReducer/slice";

const store = configureStore({
  reducer: {
    calculator: calcReducer,
    variables: variablesReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
