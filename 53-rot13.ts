export const rot13 = (str: string): string => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const rot13Alphabet = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";

  return str
    .split("")
    .map((char) => {
      if (alphabet.indexOf(char) >= 0) {
        return rot13Alphabet[alphabet.indexOf(char)];
      } else {
        return char;
      }
    })
    .join("");
};

console.log(rot13("EBG13 rknzcyr."));
