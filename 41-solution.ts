export const solution = (str: string, ending: string): boolean =>
  str.endsWith(ending);

console.log(solution("abcde", "cde"));
console.log(solution("abc", "d"));
