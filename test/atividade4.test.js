const main = require('../atividade4');

test('Verificar se um número é primo: 7, expected: true', () => {
  expect(main(7)).toBe(true);
});

test('Verificar se um número é primo: 6, expected: false', () => {
  expect(main(6)).toBe(false);
});

test('Verificar se um número é primo: 204, expected: true', () => {
  expect(main(204)).toBe(true);
});
