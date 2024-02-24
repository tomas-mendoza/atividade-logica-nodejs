const main = require('../atividade40');

test('Calcular o máximo divisor comum de uma lista de números: [8, 12, 16], expected: 4', () => {
  expect(main([8, 12, 16])).toBe(4);
});

test('Calcular o máximo divisor comum de uma lista de números: [15, 25, 35], expected: 5', () => {
  expect(main([15, 25, 35])).toBe(5);
});

test('Calcular o máximo divisor comum de uma lista de números: [18, 27, 36], expected: 9', () => {
  expect(main([18, 27, 36])).toBe(9);
});