export const duplicateCount = (text: string): number => {
  return [
    ...new Set(
      text.split("").filter((char, index) => text.indexOf(char) !== index)
    ),
  ].length;
};

console.log(duplicateCount("Indivisibility"));
