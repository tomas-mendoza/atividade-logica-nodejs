function main(elements) {
  const uniqueElements = [];

  for(const element of elements) {
    const searchElement = uniqueElements.filter((el) => el === element);

    if(searchElement.length === 0) {
      uniqueElements.push(element);
    }
  }

  return uniqueElements.length;
}

module.exports = main;