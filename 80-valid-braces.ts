export const validBraces = (braces: string): boolean => {
  const openBraces = ["(", "[", "{"];
  const closeBraces = [")", "]", "}"];
  const stack: string[] = [];

  for (let i = 0; i < braces.length; i++) {
    const currentBrace = braces[i];
    const openBraceIndex = openBraces.indexOf(currentBrace);
    if (openBraceIndex !== -1) {
      stack.push(openBraces[openBraceIndex]);
    } else {
      const closeBraceIndex = closeBraces.indexOf(currentBrace);
      const poppedBrace = stack.pop();
      if (
        poppedBrace === undefined ||
        poppedBrace !== openBraces[closeBraceIndex]
      ) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(validBraces("(){}[]"));
console.log(validBraces("(}"));
console.log(validBraces("([{}])"));
