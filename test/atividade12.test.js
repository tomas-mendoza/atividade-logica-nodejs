const main = require('../atividade12');

test('Encontrar o menor número em [444, 333, 50, 2212, 311], expected: 50', () => {
  expect(main([444, 333, 50, 2212, 311])).toBe(50);
});

test('Encontrar o menor número em [-5, 0, 5, 10, 15], expected: -5', () => {
  expect(main([-5, 0, 5, 10, 15])).toBe(-5);
});

test('Encontrar o menor número em [], expected: undefined', () => {
  expect(main([])).toBe(undefined);
});