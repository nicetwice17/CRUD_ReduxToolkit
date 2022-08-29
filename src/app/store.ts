import { configureStore } from '@reduxjs/toolkit';
import users from "../features/users/usersSlice";

export const store = configureStore({
  reducer: {
    users
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});
