const main = require('../atividade9');

test('Calcular o fatorial de 0, expected: 1', () => {
  expect(main(0)).toBe(1);
});

test('Calcular o fatorial de 6, expected: 720', () => {
  expect(main(6)).toBe(720);
});

test('Calcular o fatorial de 13, expected: 6227020800', () => {
  expect(main(13)).toBe(6227020800);
});