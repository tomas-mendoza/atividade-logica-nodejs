function main(numbers) {
  return numbers.length > 0 ? numbers.reduce((ac = 0, number) => number += ac)/numbers.length : 0;
}

module.exports = main;