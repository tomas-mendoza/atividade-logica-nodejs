const main = require('../atividade36');

test('Calcular o logaritmo de um número na base 10: 10, expected: 1', () => {
  expect(main(10)).toBe(1);
});

test('Calcular o logaritmo de um número na base 10: 100, expected: 2', () => {
  expect(main(100)).toBe(2);
});

test('Calcular o logaritmo de um número na base 10: 1000, expected: 3', () => {
  expect(main(1000)).toBe(3);
});