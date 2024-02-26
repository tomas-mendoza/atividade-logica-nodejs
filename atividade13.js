let firstNumber = 0;
let secondNumber = 1;
let nextNumber;

function main(number) {
  const array = [];

  if (number === 1) {
    return [0];
  }

  for(let i = 1; i <= number; i++) {
    array.push(firstNumber);
    nextNumber = firstNumber + secondNumber;
    firstNumber = secondNumber;
    secondNumber = nextNumber;
  }

  return array;
}

module.exports = main;