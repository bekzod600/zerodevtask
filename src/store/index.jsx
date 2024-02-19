import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./accountSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    accaunt: accountReducer,
    user: userReducer,
  },
});
