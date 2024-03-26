export const order = (words: string): string => {
  return words
    .split(" ")
    .sort((a, b) => Number(a.match(/\d/)) - Number(b.match(/\d/)))
    .join(" ");
};

console.log(order(""));
console.log(order("is2 Thi1s T4est 3a"));
console.log(order("3of Fo1r pe6ople g3ood th5e the2"));
