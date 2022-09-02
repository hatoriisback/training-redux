// * Import Configure Store
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import usersReducer from "./features/users/userSlice";

// * Import Logger (middleware)
import logger from "redux-logger";

// * Konfigurasi Store
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
