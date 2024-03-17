export class Kata {
  static squareDigits(num: number) {
    return Number(
      String(num)
        .split("")
        .map((n) => Number(n) ** 2)
        .join("")
    );
  }
}

console.log(Kata.squareDigits(9119));
console.log(Kata.squareDigits(0));
