import { configureStore } from "@reduxjs/toolkit";
import modalsSlice from "./modalsSlice";
import dataSlice from "./dataSlice";

const store = configureStore({
  reducer: {
    modals: modalsSlice.reducer,
    data: dataSlice.reducer,
  },
});

export { store };
