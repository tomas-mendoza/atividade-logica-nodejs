const main = require('./atividade2');

test('Calcular a área de um círculo: 1, expected: Math.PI', () => {
  expect(main(1)).toBeCloseTo(Math.PI);
});

test('Calcular a área de um círculo: 0, expected: 0', () => {
  expect(main(0)).toBeCloseTo(0);
});

test('Calcular a área de um círculo: 5, expected: 78.53982', () => {
  expect(main(5)).toBeCloseTo(78.53982);
});