const XO = (str) => {
  const countX = str.split(/[xX]/).length - 1;
  const countO = str.split(/[oO]/).length - 1;
  return countX === countO;
};

console.log(XO("xo"));
console.log(XO("xxOo"));
console.log(XO("xxxm"));
console.log(XO("Oo"));
console.log(XO("ooom"));
