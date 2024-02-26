function main(numbers) {
  return numbers.length > 0 ? numbers.reduce((number, ac = 0) => ac+=number) : 0;
}

module.exports = main;