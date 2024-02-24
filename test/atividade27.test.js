const main = require('../atividade27');

test('Verificar se uma palavra é um isograma: "repetir", expected: false', () => {
  expect(main('repetir')).toBe(false);
});

test('Verificar se uma palavra é um isograma: "abcdefg", expected: true', () => {
  expect(main('abcdefg')).toBe(true);
});

test('Verificar se uma palavra é um isograma: "subdermatoglyphic", expected: true', () => {
  expect(main('subdermatoglyphic')).toBe(true);
});