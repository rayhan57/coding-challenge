String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const word = "How can mirrors be real if our eyes aren't real";
console.log(word.toJadenCase());
