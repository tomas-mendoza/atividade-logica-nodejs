const main = require('../atividade8');

test('Verificar se a string "" é um palíndromo', () => {
  expect(main('')).toBe(true);
});

test('Verificar se a string "hello" é um palíndromo', () => {
  expect(main('hello')).toBe(false);
});

test('Verificar se a string "A man a plan a canal Panama" é um palíndromo', () => {
  expect(main('A man a plan a canal Panama')).toBe(true);
});