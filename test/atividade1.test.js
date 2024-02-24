const main = require('../atividade1');

test('Verificar se um número é positivo: 5, expected: "positivo"', () => {
  expect(main(5)).toBe('positivo');
});

test('Verificar se um número é negativo: 5, expected: "negativo"', () => {
  expect(main(-5)).toBe('negativo');
});

test('Verificar se um número é zero: 0, expected: "zero"', () => {
  expect(main(0)).toBe('zero');
});
