import { getSumFromArray } from "./getSumFromArray";

export function getAverageFromArray(array: number[]) {
    if (array.length === 0) {
        return 0
    }

    return Math.floor(getSumFromArray(array) / array.length)
}