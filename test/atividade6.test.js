const main = require('../atividade6');

test('Contar a quantidade de vogais em uma string: "Hello World", expected: 3', () => {
  expect(main('Hello World')).toBe(3);
});

test('Contar a quantidade de vogais em uma string: "This is a test sentence", expected: 7', () => {
  expect(main('This is a test sentence')).toBe(7);
});

test('Contar a quantidade de vogais em uma string: "", expected: 0', () => {
  expect(main('')).toBe(0);
});