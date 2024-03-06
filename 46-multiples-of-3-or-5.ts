export class Challenge {
  static solution = (n: number) =>
    Array.from({ length: n }, (_, i) => i)
      .filter((i) => i % 3 === 0 || i % 5 === 0)
      .reduce((acc, cur) => acc + cur, 0);
}

console.log(Challenge.solution(10));
