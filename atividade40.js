function gcd(a, b) {
  while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
  }
  return a;
}

function main(numbers) {
  if (numbers.length === 0) {
      return null; 
  }
  
  
  let result = numbers[0];

  
  for (let i = 1; i < numbers.length; i++) {
      result = gcd(result, numbers[i]);
  }

  return result;
}

module.exports = main;
