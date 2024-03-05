const SeriesSum = (n) =>
  Array.from({ length: n }, (_, i) => 1 / (3 * i + 1))
    .reduce((acc, cur) => acc + cur, 0)
    .toFixed(2);

console.log(SeriesSum(5));
