export const createPhoneNumber = (numbers: number[]): string => {
  const areaCode = numbers.slice(0, 3).join("");
  const prefix = numbers.slice(3, 6).join("");
  const lineNumber = numbers.slice(6, 10).join("");

  return `(${areaCode}) ${prefix}-${lineNumber}`;
};

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
