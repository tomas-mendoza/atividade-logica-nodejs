const main = require('../atividade32');

test('Calcular a área de um triângulo: base 5, altura 4, expected: 10', () => {
  expect(main(5, 4)).toBe(10);
});

test('Calcular a área de um triângulo: base 10, altura 3, expected: 15', () => {
  expect(main(10, 3)).toBe(15);
});

test('Calcular a área de um triângulo: base 8, altura 6, expected: 24', () => {
  expect(main(8, 6)).toBe(24);
});