const main = require('../atividade5');

test('Somar todos os elementos de um array: [], expected: 0', () => {
  expect(main([])).toBe(0);
});

test('Somar todos os elementos de um array: [-1, -2, -3, -4, -5], expected: -15', () => {
  expect(main([-1, -2, -3, -4, -5])).toBe(-15);
});

test('Somar todos os elementos de um array: [1.5, 2.5, 3.5], expected: 7.5', () => {
  expect(main([1.5, 2.5, 3.5])).toBe(7.5);
});
