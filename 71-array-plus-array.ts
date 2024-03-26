export const arrayPlusArray = (arr1: number[], arr2: number[]): number =>
  arr1.concat(arr2).reduce((acc, cur) => acc + cur);

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
