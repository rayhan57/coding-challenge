export const countBits = (n: number): number =>
  n
    .toString(2)
    .split("")
    .filter((num) => num === "1").length;

console.log(countBits(1234));
console.log(countBits(4));
console.log(countBits(7));
console.log(countBits(9));
