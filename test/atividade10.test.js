const main = require('../atividade10');

test('Calcular a área de um quadrado de 10m², expected: 100', () => {
  expect(main(10)).toBe(100);
});

test('Calcular a área de um quadrado de 30m², expected: 900', () => {
  expect(main(30)).toBe(900);
});

test('Calcular a área de um quadrado de 50m², expected: 2500', () => {
  expect(main(50)).toBe(2500);
});