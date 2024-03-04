const twiceAsOld = (dadYearsOld, sonYearsOld) =>
  dadYearsOld > sonYearsOld * 2
    ? dadYearsOld - sonYearsOld * 2
    : sonYearsOld * 2 - dadYearsOld;

console.log(twiceAsOld(36, 7));
