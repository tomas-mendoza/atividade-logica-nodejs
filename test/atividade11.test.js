const main = require('../atividade11');

test('Verificar se o ano 2024 é bissexto, expected: true', () => {
  expect(main(2024)).toBe(true);
});

test('Verificar se o ano 2001 é bissexto, expected: false', () => {
  expect(main(2001)).toBe(false);
});

test('Verificar se o ano 2021 é bissexto, expected: false', () => {
  expect(main(2021)).toBe(false);
});