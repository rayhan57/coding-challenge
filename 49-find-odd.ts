export const findOdd = (xs: number[]): number =>
  xs.find((x) => xs.filter((y) => y === x).length % 2 !== 0) as number;

console.log(findOdd([1, 1, 2]));
