export const isIsogram = (str: string): boolean => {
  const chars = Array.from(str.toLowerCase());

  for (let i = 0; i < chars.length; i++) {
    if (chars.indexOf(chars[i]) !== i) return false;
  }
  return true;
};

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));
