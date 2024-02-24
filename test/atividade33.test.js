const main = require('../atividade33');

test('Calcular o perímetro de um círculo: raio 5, expected: ~31.42', () => {
  expect(main(5)).toBeCloseTo(31.42, 2);
});

test('Calcular o perímetro de um círculo: raio 8, expected: ~50.27', () => {
  expect(main(8)).toBeCloseTo(50.27, 2);
});

test('Calcular o perímetro de um círculo: raio 10, expected: ~62.83', () => {
  expect(main(10)).toBeCloseTo(62.83, 2);
});