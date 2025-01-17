function main(number) {
  const savedNumbers = [];

  for(let i = 0; i < number; i++) {
    if(number % i === 0) {
      savedNumbers.push(i);
    }
  }

  return savedNumbers.reduce((ac, number) => ac += number) === number;
}

module.exports = main;