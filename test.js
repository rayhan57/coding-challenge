const splitWord = (word) =>
  word
    .split("")
    .map((letter, index) => `Letter ${index + 1}: ${letter}`)
    .join("\n");

console.log(splitWord("Rayhan"));
