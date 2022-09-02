// * Import Package createSlice()
import { createSlice } from "@reduxjs/toolkit";

// * Membuat initial state nya
const initialState = {
  count: 0,
};

// * Membuat Reducer nya
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
},[]);

// * Export variable const sebagai "actions" nya
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// * Export counterSlice sebagai "reducer" nya
export default counterSlice.reducer;
