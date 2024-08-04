import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RandomNumbersState } from "./types";

const initialState: RandomNumbersState = {
    allNumbers: []
};

export const randomNumbersSlice = createSlice({
    name: 'RandomNumbers',
    initialState,
    reducers: {
      addNumber: (state, { payload: newNumber }: PayloadAction<number>) => {
        state.allNumbers.push(newNumber)
      },
    }
  });

  export const { addNumber } = randomNumbersSlice.actions;

  export default randomNumbersSlice.reducer;