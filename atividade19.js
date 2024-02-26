function main(numbers) {
  return numbers.length > 0 ? numbers.reduce((number, ac = 0) => number += ac)/numbers.length : 0;
}

module.exports = main;