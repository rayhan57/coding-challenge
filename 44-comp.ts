export const comp = (a1: number[] | null, a2: number[] | null): boolean =>
  a1 === null || a2 === null
    ? false
    : a1
        .map((x) => x * x)
        .sort((a, b) => a - b)
        .join() === a2.sort((a, b) => a - b).join();

console.log(
  comp(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
  )
);
