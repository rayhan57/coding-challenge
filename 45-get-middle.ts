export const getMiddle = (s: string): string =>
  s.length % 2 === 0
    ? s.slice(s.length / 2 - 1, s.length / 2 + 1)
    : s.slice(s.length / 2, s.length / 2 + 1);

console.log(getMiddle("test"));
