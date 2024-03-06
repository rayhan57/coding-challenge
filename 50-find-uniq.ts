export const findUniq = (arr: number[]) =>
  arr.find((x) => arr.indexOf(x) === arr.lastIndexOf(x));

console.log(findUniq([0, 0, 0.55, 0, 0]));
