export const sumPairs = (
  ints: number[],
  s: number
): [number, number] | void => {
  const seen = new Set<number>();

  for (const num of ints) {
    if (seen.has(s - num)) return [s - num, num];
    seen.add(num);
  }
};

console.log(sumPairs([4, 3, 2, 3, 4], 6));
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10));
