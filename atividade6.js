function main(string) {
  return string.length > 0 ? string.match(/[aeiouà-ú]/gi).length : 0;
}

module.exports = main;