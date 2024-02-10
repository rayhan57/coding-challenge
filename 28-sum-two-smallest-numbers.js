const sumTwoSmallestNumbers = (numbers) => {
  const positiveNumbers = numbers
    .filter((number) => number > 0)
    .sort((a, b) => a - b);

  return positiveNumbers[0] + positiveNumbers[1];
};

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));
