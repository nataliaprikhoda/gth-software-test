export function getSumFromArray(array: number[]) {
    return array.reduce((newSum, number) => newSum + number, 0)
}