const main = require('../atividade29');

test('Calcular o cosseno de um ângulo: 0°, expected: 1', () => {
  expect(main(0)).toBe(1);
});

test('Calcular o cosseno de um ângulo: 45°, expected: ~0.707', () => {
  expect(main(Math.PI / 4)).toBeCloseTo(0.707, 3);
});

test('Calcular o cosseno de um ângulo: 90°, expected: 0', () => {
  expect(main(Math.PI / 2)).toBeCloseTo(0, 3);
});