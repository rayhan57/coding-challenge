const zeroFuel = (distanceToPump, mpg, fuelLeft) =>
  distanceToPump <= mpg * fuelLeft;

console.log(zeroFuel(50, 25, 2));
