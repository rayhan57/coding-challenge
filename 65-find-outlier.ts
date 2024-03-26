export const findOutlier = (integers: number[]): number => {
  const evenNums = integers.filter((num) => num % 2 === 0);
  const oddNums = integers.filter((num) => num % 2 !== 0);

  return oddNums.length === 1 ? oddNums[0] : evenNums[0];
};

console.log(findOutlier([0, 1, 2]));
console.log(findOutlier([1, 2, 3]));
console.log(findOutlier([2, 4, 8, 10, 3]));
console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
