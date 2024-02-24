const main = require('../atividade34');

test('Verificar se uma palavra é um pangrama: "The quick brown fox jumps over the lazy dog", expected: true', () => {
  expect(main('The quick brown fox jumps over the lazy dog')).toBe(true);
});

test('Verificar se uma palavra é um pangrama: "Hello world", expected: false', () => {
  expect(main('Hello world')).toBe(false);
});

test('Verificar se uma palavra é um pangrama: "Pack my box with five dozen liquor jugs", expected: true', () => {
  expect(main('Pack my box with five dozen liquor jugs')).toBe(true);
});