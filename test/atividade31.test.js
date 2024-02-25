const main = require('../atividade31');

test('Verificar se um número é primo de Mersenne: 3, expected: true', () => {
  expect(main(3)).toBe(true);
});

test('Verificar se um número é primo de Mersenne: 5, expected: false', () => {
  expect(main(5)).toBe(false);
});

test('Verificar se um número é primo de Mersenne: 7, expected: true', () => {
  expect(main(7)).toBe(true);
});