export const divisors = (n: number): number =>
  Array.from({ length: n }, (_, i) => i + 1).filter((x) => n % x === 0).length;

console.log(divisors(10));
