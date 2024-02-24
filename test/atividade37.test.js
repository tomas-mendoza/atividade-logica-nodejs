const main = require('../atividade37');

test('Verificar se um número é um número de Armstrong: 10, expected: false', () => {
  expect(main(10)).toBe(false);
});

test('Verificar se um número é um número de Armstrong: 370, expected: true', () => {
  expect(main(370)).toBe(true);
});

test('Verificar se um número é um número de Armstrong: 9474, expected: true', () => {
  expect(main(9474)).toBe(true);
});