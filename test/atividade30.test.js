const main = require('../atividade30');

test('Verificar se um número é uma sequência de Fibonacci: 5, expected: true', () => {
  expect(main(5)).toBe(true);
});

test('Verificar se um número é uma sequência de Fibonacci: 10, expected: false', () => {
  expect(main(10)).toBe(false);
});

test('Verificar se um número é uma sequência de Fibonacci: 21, expected: true', () => {
  expect(main(21)).toBe(true);
});