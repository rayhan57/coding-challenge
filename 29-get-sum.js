const getSum = (a, b) => {
  if (a === b) return a;

  const min = Math.min(a, b);
  const max = Math.max(a, b);

  return Array.from({ length: max - min + 1 }, (_, i) => min + i).reduce(
    (a, b) => a + b,
    0
  );
};

console.log(getSum(0, -1));
console.log(getSum(0, 1));
console.log(getSum(-1, 2));
console.log(getSum(2, 2));
