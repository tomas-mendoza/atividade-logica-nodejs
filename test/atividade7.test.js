const main = require('../atividade7');

test('Calcular a média ponderada de 3 notas: 5, 5, 5, expected: 5', () => {
  expect(main(5, 5, 5)).toBe(5);
});

test('Calcular a média ponderada de 3 notas: 8, 7, 6, expected: 6.833333333333333', () => {
  expect(main(8, 7, 6)).toBe(6.833333333333333);
});

test('Calcular a média ponderada de 3 notas: 0, 0, 0, expected: 0', () => {
  expect(main(0, 0, 0)).toBe(0);
});