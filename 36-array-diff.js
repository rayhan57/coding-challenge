const arrayDiff = (a, b) => a.filter((x) => !b.includes(x));

console.log(arrayDiff([1, 2], [1]));
