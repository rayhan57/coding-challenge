const descendingOrder = (n) =>
  Number(
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );

console.log(descendingOrder(42145));
