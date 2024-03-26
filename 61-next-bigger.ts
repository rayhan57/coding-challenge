export const nextBigger = (n: number): number => {
  const arr = String(n).split("").reverse();

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      const j = arr.findIndex((digit) => digit > arr[i]);

      [arr[i], arr[j]] = [arr[j], arr[i]];
      return Number(
        [...arr.slice(i).reverse(), ...arr.slice(0, i).sort()].join("")
      );
    }
  }
  return -1;
};

console.log(nextBigger(12));
console.log(nextBigger(513));
console.log(nextBigger(2017));
