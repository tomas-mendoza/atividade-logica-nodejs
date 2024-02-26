function main(number) {
  let sum = 0;
  for (let temp = number; temp > 0; temp = parseInt(temp / 10, 10)) {
    sum += temp % 10;
  }
  return (number % sum == 0);
}

module.exports = main;