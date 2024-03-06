export const isPangram = (phrase: string) =>
  "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .every((letter) => phrase.toLowerCase().includes(letter));

console.log(isPangram("The quick brown fox jumps over the lazy dog"));
