const main = require('../atividade26');

test('Calcular a raiz quadrada de um número: 4, expected: 2', () => {
  expect(main(4)).toBe(2);
});

test('Calcular a raiz quadrada de um número: 9, expected: 3', () => {
  expect(main(9)).toBe(3);
});

test('Calcular a raiz quadrada de um número: 25, expected: 5', () => {
  expect(main(25)).toBe(5);
});