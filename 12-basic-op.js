const basicOp = (operation, value1, value2) => {
  const operations = {
    "+": value1 + value2,
    "-": value1 - value2,
    "*": value1 * value2,
    "/": value1 / value2,
  };
  return operations[operation];
};

console.log(basicOp("+", 4, 7));
