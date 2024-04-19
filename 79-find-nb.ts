export const findNb = (m: number): number => {
  const cubeVolume = (sideLength: number): number => sideLength ** 3;

  let totalVolume = 0,
    n = 1;

  while (totalVolume < m) {
    totalVolume += cubeVolume(n);
    if (totalVolume === m) return n;
    n++;
  }

  return -1;
};

console.log(findNb(4183059834009));
console.log(findNb(24723578342962));
console.log(findNb(135440716410000));
