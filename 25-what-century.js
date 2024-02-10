const whatCentury = (year) => {
  const century = Math.ceil(year / 100);
  if (century % 10 === 1 && century !== 11) {
    return `${century}st`;
  } else if (century % 10 === 2 && century !== 12) {
    return `${century}nd`;
  } else if (century % 10 === 3 && century !== 13) {
    return `${century}rd`;
  } else {
    return `${century}th`;
  }
};

console.log(whatCentury(1999));
console.log(whatCentury(2011));
console.log(whatCentury(2154));
console.log(whatCentury(2259));
console.log(whatCentury(1124));
console.log(whatCentury(2000));
