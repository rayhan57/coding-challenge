const printerError = (s) =>
  s.split("").filter((x) => x > "m").length + "/" + s.length;

const s = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";

console.log(printerError(s));
