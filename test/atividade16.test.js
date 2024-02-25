const main = require('../atividade16');

test('Calcular o produto escalar de dois vetores: [-1, -2, -3], [4, 5, 6], expected: -32', () => {
  expect(main([-1, -2, -3], [4, 5, 6])).toBe(-32);
});

test('Calcular o produto escalar de dois vetores: [2, 4, 6], [1, 1, 1], expected: 12', () => {
  expect(main([2, 4, 6], [1, 1, 1])).toBe(12);
});

test('Calcular o produto escalar de dois vetores: [1, 2, 3], [1, 2, 3], expected: 14', () => {
  expect(main([1, 2, 3], [1, 2, 3])).toBe(14);
});