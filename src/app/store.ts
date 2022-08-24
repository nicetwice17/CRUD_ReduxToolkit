import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import users from "../features/users/usersSlice";

export const store = configureStore({
  reducer: {
    users
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk <ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
