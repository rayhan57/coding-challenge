export const parse = (data: string): number[] => {
  let value = 0;
  const result: number[] = [];

  data
    .split("")
    .map((char) =>
      char === "i"
        ? value++
        : char === "d"
        ? value--
        : char === "s"
        ? (value **= 2)
        : char === "o"
        ? result.push(value)
        : null
    );

  return result;
};

console.log(parse("iiisdoso"));
