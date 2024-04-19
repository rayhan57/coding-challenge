export const high = (str: string): string => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const wordScore = (word: string) =>
    word
      .split("")
      .reduce((total, char) => total + alphabet.indexOf(char) + 1, 0);

  return str
    .split(" ")
    .reduce(
      (highest, word) =>
        wordScore(word) > wordScore(highest) ? word : highest,
      ""
    );
};

console.log(high("man i need a taxi up to ubud"));
console.log(high("what time are we climbing up the volcano"));
