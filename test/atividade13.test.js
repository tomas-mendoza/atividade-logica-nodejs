const main = require('../atividade13');

test('Gerar os primeiros 5 números da sequência de Fibonacci, expected: [0, 1, 1, 2, 3]', () => {
  expect(main(5)).toEqual([0, 1, 1, 2, 3]);
});

test('Gerar os primeiros 10 números da sequência de Fibonacci, expected: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]', () => {
  expect(main(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
});

test('Gerar o primeiro número da sequência de Fibonacci, expected: [0]', () => {
  expect(main(1)).toEqual([0]);
});