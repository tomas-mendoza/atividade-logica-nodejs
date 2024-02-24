const main = require('../atividade20');

test('Calcular a área de um retângulo ladoA: 10 e ladoB: 2, expected: 20', () => {
  expect(main(10, 2)).toBe(20);
});

test('Calcular a área de um retângulo ladoA: 4 e ladoB: 8, expected: 32', () => {
  expect(main(4, 8)).toBe(32);
});

test('Calcular a área de um retângulo ladoA: 0 e ladoB: 10, expected: 0', () => {
  expect(main(0, 10)).toBe(0);
});
