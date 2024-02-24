const main = require('../atividade22');

test('Verificar se um número é perfeito: 6, expected: true', () => {
  expect(main(6)).toBe(true);
});

test('Verificar se um número é perfeito: 28, expected: true', () => {
  expect(main(28)).toBe(true);
});

test('Verificar se um número é perfeito: 12, expected: false', () => {
  expect(main(12)).toBe(false);
});