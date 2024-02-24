const main = require('../atividade21');

test('Verificar se uma lista de palavras forma um acróstico: ["Hello", "World"], "HW", expected: true', () => {
  expect(main(["Hello", "World"], "HW")).toBe(true);
});

test('Verificar se uma lista de palavras forma um acróstico: ["Apple", "Banana", "Movie"], "ABC", expected: false', () => {
  expect(main(["Apple", "Banana", "Movie"], "ABC")).toBe(false);
});

test('Verificar se uma lista de palavras forma um acróstico: ["Sun", "Moon", "Star"], "SMS", expected: true', () => {
  expect(main(["Sun", "Moon", "Star"], "SMS")).toBe(true);
});