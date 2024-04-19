export const towerBuilder = (nFloors: number): string[] => {
  return Array.from(
    { length: nFloors },
    (_, i) =>
      " ".repeat(nFloors - i - 1) +
      "*".repeat(2 * i + 1) +
      " ".repeat(nFloors - i - 1)
  );
};

console.log(towerBuilder(1));
console.log(towerBuilder(2));
console.log(towerBuilder(3));
