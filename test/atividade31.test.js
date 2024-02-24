const main = require('../atividade31');

test('Verificar se um número é primo de Mersenne: 3, expected: true', () => {
  expect(main(3)).toBe(true);
});

test('Verificar se um número é primo de Mersenne: 5, expected: true', () => {
  expect(main(5)).toBe(true);
});

test('Verificar se um número é primo de Mersenne: 7, expected: false', () => {
  expect(main(7)).toBe(false);
});