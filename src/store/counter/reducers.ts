import { PayloadAction } from '@reduxjs/toolkit';
import { counterState } from '.';

const changeCounter = (
  state: counterState,
  action: PayloadAction<string>
): void => {
  if (action.payload === 'plus') state.count += 1;
  if (action.payload === 'minus') state.count -= 1;
};

const reducers = {
  changeCounter,
};

export default reducers;
