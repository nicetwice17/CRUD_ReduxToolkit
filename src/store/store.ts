import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from "react-redux";
import users from "../features/users/usersSlice";

export const store = configureStore({
  reducer: {
    users
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export type RootState = ReturnType<typeof store.getState>;
