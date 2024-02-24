const main = require('../atividade23');

test('Contar a quantidade de números pares em uma lista: [1, 2, 3, 4, 5, 6], expected: 3', () => {
  expect(main([1, 2, 3, 4, 5, 6])).toBe(3);
});

test('Contar a quantidade de números pares em uma lista: [10, 20, 30, 40, 50], expected: 5', () => {
  expect(main([10, 20, 30, 40, 50])).toBe(5);
});

test('Contar a quantidade de números pares em uma lista: [11, 13, 15, 17, 19], expected: 0', () => {
  expect(main([11, 13, 15, 17, 19])).toBe(0);
});