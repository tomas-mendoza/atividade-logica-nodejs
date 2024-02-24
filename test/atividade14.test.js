const main = require('../atividade14');

test('Verifica se o número 7 é par, expected: false', () => {
  expect(main(7)).toBe(false);
});

test('Verifica se o número 0 é par, expected: true', () => {
  expect(main(0)).toBe(true);
});

test('Verifica se o número -3 é par, expected: false', () => {
  expect(main(-3)).toBe(false);
});