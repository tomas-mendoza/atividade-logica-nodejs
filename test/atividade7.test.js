const main = require('../atividade7');

test('Calcular a média ponderada de 3 notas: 5, 5, 5, expected: 5', () => {
  expect(main(5, 5, 5)).toBe(5);
});

test('Calcular a média ponderada de 3 notas: 10, 10, 10, expected: 10', () => {
  expect(main(10, 10, 10)).toBe(10);
});

test('Calcular a média ponderada de 3 notas: 0, 0, 0, expected: 0', () => {
  expect(main(0, 0, 0)).toBe(0);
});
