function main(numbers) {
  if(numbers.length === 0) {
    return undefined;
  }

  return numbers.reduce((ac = undefined, number) => {
    if(ac > number || typeof ac === 'undefined') {
      return number;
    }

    return ac;
  });
}

module.exports = main;