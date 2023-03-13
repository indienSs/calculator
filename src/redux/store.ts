import { configureStore } from "@reduxjs/toolkit";
import calcElementsSlice from "./calcReducer/slice";

const store = configureStore({
  reducer: {
    calculator: calcElementsSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
