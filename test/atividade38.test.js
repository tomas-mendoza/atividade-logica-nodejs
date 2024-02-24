const main = require('../atividade38');

test('Calcular a soma dos dígitos de um número: 123, expected: 6', () => {
  expect(main(123)).toBe(6);
});

test('Calcular a soma dos dígitos de um número: 4567, expected: 22', () => {
  expect(main(4567)).toBe(22);
});

test('Calcular a soma dos dígitos de um número: 987654321, expected: 45', () => {
  expect(main(987654321)).toBe(45);
});