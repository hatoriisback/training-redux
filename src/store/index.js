// * Import Configure Store
import { configureStore } from "@reduxjs/toolkit";
import CounterClass from "../components/CounterClass";
import counterReducer from "../features/counter/counterSlice";

// * Konfigurasi Store
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
