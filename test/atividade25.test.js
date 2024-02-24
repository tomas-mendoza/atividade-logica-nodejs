const main = require('../atividade25');

test('Verificar se um número é uma potência de 2: 1, expected: true', () => {
  expect(main(1)).toBe(true);
});

test('Verificar se um número é uma potência de 2: 8, expected: true', () => {
  expect(main(8)).toBe(true);
});

test('Verificar se um número é uma potência de 2: 10, expected: false', () => {
  expect(main(10)).toBe(false);
});