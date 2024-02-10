const betterThanAverage = (classPoints, yourPoints) => {
  const average = classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
  return yourPoints > average;
};

console.log(betterThanAverage([2, 3], 5));
