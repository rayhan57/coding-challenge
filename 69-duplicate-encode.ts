export const duplicateEncode = (word: string) => {
  const charFrequencies: { [key: string]: number } = {};

  for (const char of word.toLowerCase()) {
    charFrequencies[char] = (charFrequencies[char] || 0) + 1;
  }

  return word
    .toLowerCase()
    .split("")
    .map((char) => (charFrequencies[char] > 1 ? ")" : "("))
    .join("");
};

console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));
