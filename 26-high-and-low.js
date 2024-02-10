const highAndLow = (numbers) => {
  const sorted = numbers
    .split(" ")
    .map((number) => parseInt(number))
    .sort((a, b) => b - a);

  return `${sorted[0]} ${sorted[sorted.length - 1]}`;
};

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
