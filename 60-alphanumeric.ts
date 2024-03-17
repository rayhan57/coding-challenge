export const alphanumeric = (string: string): boolean =>
  string.length > 0 && /^[a-zA-Z0-9]+$/.test(string);

console.log(alphanumeric("Mazinkaiser"));
console.log(alphanumeric("hello world_"));
console.log(alphanumeric("PassW0rd"));
console.log(alphanumeric(""));
