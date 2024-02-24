const main = require('../atividade3');

test('Converter graus Celsius para Fahrenheit: 0, expected: 32', () => {
  expect(main(0)).toBe(32);
});

test('Converter graus Celsius para Fahrenheit: 100, expected: 212', () => {
  expect(main(100)).toBe(212);
});

test('Converter graus Celsius para Fahrenheit: -40, expected: -40', () => {
  expect(main(-40)).toBe(-40);
});