const getCount = (str) =>
  str && str.match(/[aeiou]/gi) ? str.match(/[aeiou]/gi).length : 0;

console.log(getCount("abracadabra"));
console.log(getCount("pyx"));
