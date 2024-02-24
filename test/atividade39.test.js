const main = require('../atividade39');

test('Verificar se um número é um número de Harshad: 18, expected: true', () => {
  expect(main(18)).toBe(true);
});

test('Verificar se um número é um número de Harshad: 23, expected: false', () => {
  expect(main(23)).toBe(false);
});

test('Verificar se um número é um número de Harshad: 12, expected: true', () => {
  expect(main(12)).toBe(true);
});