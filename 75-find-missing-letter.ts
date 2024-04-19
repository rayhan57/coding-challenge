export const findMissingLetter = (array: string[]): string => {
  const firstCharCode = array[0].charCodeAt(0);

  for (let i = 0; i < array.length; i++) {
    const expectedCharCode = firstCharCode + i;
    const actualCharCode = array[i].charCodeAt(0);
    if (actualCharCode !== expectedCharCode) {
      return String.fromCharCode(expectedCharCode);
    }
  }

  return "";
};

console.log(findMissingLetter(["a", "b", "c", "d", "f"]));
console.log(findMissingLetter(["O", "Q", "R", "S"]));
