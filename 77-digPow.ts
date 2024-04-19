export class G964 {
  public static digPow(n: number, p: number): number {
    const digits = String(n).split("").map(Number);
    const result = digits.reduce((acc, cur, i) => acc + cur ** (p + i), 0);

    return result % n === 0 ? result / n : -1;
  }
}

console.log(G964.digPow(89, 1));
console.log(G964.digPow(92, 1));
console.log(G964.digPow(114, 3));
