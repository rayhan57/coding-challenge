const persistence = (num) =>
  num.toString().length > 1
    ? 1 +
      persistence(
        num
          .toString()
          .split("")
          .reduce((a, b) => a * b)
      )
    : 0;

console.log(persistence(39));
