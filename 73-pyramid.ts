export const pyramid = (n: number): Array<Array<number>> => {
  const result: Array<Array<number>> = [];

  for (let i = 0; i < n; i++) {
    result.push([]);
    for (let j = 0; j <= i; j++) {
      result[i].push(1);
    }
  }

  return result;
};

console.log(pyramid(0));
console.log(pyramid(1));
console.log(pyramid(2));
console.log(pyramid(3));
