const positiveSum = (arr) =>
  arr.length > 0
    ? arr.map((num) => (num > 0 ? num : 0)).reduce((a, b) => a + b)
    : 0;

console.log(positiveSum([1, 2, 3, 4, 5]));
console.log(positiveSum([1, -2, 3, 4, 5]));
console.log(positiveSum([]));
