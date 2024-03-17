export const listSquared = (m: number, n: number): number[][] => {
  const result: number[][] = [];

  for (let i = m; i <= n; i++) {
    const divisors: number[] = [];
    const sqrtI = Math.sqrt(i);
    let sumOfSquares = 0;

    for (let j = 1; j <= sqrtI; j++) {
      if (i % j === 0) {
        const quotient = i / j;
        divisors.push(j);
        if (quotient !== j) {
          divisors.push(quotient);
        }
      }
    }

    for (const divisor of divisors) {
      sumOfSquares += divisor * divisor;
    }

    const squareRoot = Math.sqrt(sumOfSquares);
    if (Number.isInteger(squareRoot)) {
      result.push([i, sumOfSquares]);
    }
  }

  return result;
};

console.log(listSquared(1, 250));
