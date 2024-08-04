import { RootState } from "../../App/state/types";

export const selectAllNumbers = (state: RootState) => state.randomNumbers.allNumbers;

export const selectSum = (state: RootState) => state.randomNumbers.allNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

export const selectLast5Numbers = (state: RootState) => state.randomNumbers.allNumbers.slice(-5);
