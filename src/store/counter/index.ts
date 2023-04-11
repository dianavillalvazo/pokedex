import { createSlice } from '@reduxjs/toolkit';
import reducers from './reducers';

export interface counterState {
  count: number;
}

const initialState: counterState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers,
});

export const { changeCounter } = counterSlice.actions;

export default counterSlice.reducer;
