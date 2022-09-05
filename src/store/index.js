// * Import Configure Store
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import usersReducer from "./features/users/userSlice";

// * Import Logger (middleware)
import logger from "redux-logger";

// * Import AuthReducer (auth)
import authReducer from "./features/auth/authSlice";

// * Konfigurasi Store
export const store = configureStore({
  reducer: {
    auth: authReducer,
    counter: counterReducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
