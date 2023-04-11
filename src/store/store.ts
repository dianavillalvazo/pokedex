import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import counter from './counter';
import pokedex from './pokedex';

export const store = configureStore({
  reducer: {
    counter,
    pokedex,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredPaths: ['errors.error'],
      },
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
