function main(numbers) {
  return numbers.length > 0 ? numbers.reduce((ac = 0, number) => ac+=number) : 0;
}

module.exports = main;