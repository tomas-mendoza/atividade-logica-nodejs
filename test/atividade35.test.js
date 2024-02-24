const main = require('../atividade35');

test('Calcular o número de Euler (e) elevado a um número: 0, expected: 1', () => {
  expect(main(0)).toBe(1);
});

test('Calcular o número de Euler (e) elevado a um número: 1, expected: ~2.718', () => {
  expect(main(1)).toBeCloseTo(2.718, 3);
});

test('Calcular o número de Euler (e) elevado a um número: 2, expected: ~7.389', () => {
  expect(main(2)).toBeCloseTo(7.389, 3);
});