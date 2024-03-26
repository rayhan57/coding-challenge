export const isValidWalk = (walk: string[]): boolean => {
  if (walk.length !== 10) {
    return false;
  }

  let x = 0;
  let y = 0;

  for (const direction of walk) {
    switch (direction) {
      case "n":
        y++;
        break;
      case "s":
        y--;
        break;
      case "e":
        x++;
        break;
      case "w":
        x--;
        break;
      default:
        return false;
    }
  }

  return x === 0 && y === 0;
};

console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
console.log(
  isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"])
);
console.log(isValidWalk(["w"]));
console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]));
