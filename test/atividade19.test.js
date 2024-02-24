const main = require('../atividade19');

test('Calcular a média aritmética de uma lista de números [32, 4, 6, 12, 62], expected: 23.2', () => {
  expect(main([32, 4, 6, 12, 62])).toBe(23.2);
});

test('Calcular a média aritmética de uma lista de números [-1, -2, -3, -4], expected: -2.5', () => {
  expect(main([-1, -2, -3, -4])).toBe(-2.5);
});

test('Calcular a média aritmética de uma lista de números [], expected: 0', () => {
  expect(main([])).toBe(0);
});