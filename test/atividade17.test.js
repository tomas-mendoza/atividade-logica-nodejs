const main = require('../atividade17');

test('Calcular o máximo divisor comum de dois números: 12, 15. expected: 3', () => {
  expect(main(12, 15)).toBe(3);
});

test('Calcular o máximo divisor comum de dois números: 17, 23. expected: 1', () => {
  expect(main(17, 23)).toBe(1);
});

test('Calcular o máximo divisor comum de dois números: 105, 140. expected: 35', () => {
  expect(main(105, 140)).toBe(35);
});