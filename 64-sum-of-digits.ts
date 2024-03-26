export const digitalRoot = (n: number): number => {
  const digits = String(n).split("").map(Number);
  const sum = digits.reduce((acc, cur) => acc + cur);
  return sum < 10 ? sum : digitalRoot(sum);
};

console.log(digitalRoot(16));
console.log(digitalRoot(456));
console.log(digitalRoot(942));
