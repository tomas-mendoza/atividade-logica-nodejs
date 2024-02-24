const main = require('../atividade28');

test('Contar a quantidade de elementos únicos em uma lista: [1, 2, 3, 1, 2, 3, 4], expected: 4', () => {
  expect(main([1, 2, 3, 1, 2, 3, 4])).toBe(4);
});

test('Contar a quantidade de elementos únicos em uma lista: ["a", "b", "a", "c", "d", "b"], expected: 4', () => {
  expect(main(["a", "b", "a", "c", "d", "b"])).toBe(4);
});

test('Contar a quantidade de elementos únicos em uma lista: [1, 2, 3, 4, 5], expected: 5', () => {
  expect(main([1, 2, 3, 4, 5])).toBe(5);
});