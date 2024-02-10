const enough = (cap, on, wait) => (on + wait > cap ? on + wait - cap : 0);

console.log(enough(100, 60, 50));
