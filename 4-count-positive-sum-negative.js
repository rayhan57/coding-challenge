const countPositivesSumNegatives = (input) => {
  return input && input.length
    ? [
        input.filter((x) => x > 0).length,
        input.filter((x) => x < 0).reduce((acc, current) => acc + current, 0),
      ]
    : [];
};

console.log(countPositivesSumNegatives([0, 0]));
