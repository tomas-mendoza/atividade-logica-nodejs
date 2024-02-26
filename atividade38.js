function main(numbers) {
  return numbers.toString().split('').map((number) => parseInt(number)).reduce((number, ac = 0) => ac += parseInt(number));
}

module.exports = main;