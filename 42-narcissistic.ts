export const narcissistic = (value: number): boolean =>
  value
    .toString()
    .split("")
    .reduce(
      (acc, cur) => acc + Math.pow(Number(cur), value.toString().length),
      0
    ) === value;

console.log(narcissistic(153));
