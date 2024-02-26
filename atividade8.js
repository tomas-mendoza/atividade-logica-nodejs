function main(string) {
  return string.toLowerCase().replaceAll(' ', '') === string.toLowerCase().replaceAll(' ', '').split('').reverse().join('');
}

module.exports = main;