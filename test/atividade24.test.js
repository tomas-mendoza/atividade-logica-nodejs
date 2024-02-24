const main = require('../atividade24');

test('Calcular o seno de um ângulo: 0°, expected: 0', () => {
  expect(main(0)).toBeCloseTo(0);
});

test('Calcular o seno de um ângulo: 45°, expected: ~0.707', () => {
  expect(main(Math.PI / 4)).toBeCloseTo(0.707, 3);
});

test('Calcular o seno de um ângulo: 90°, expected: 1', () => {
  expect(main(Math.PI / 2)).toBeCloseTo(1);
});