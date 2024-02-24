const main = require('../atividade15');

test('Verificar se a palavra "listen" é um anagrama de outra "banana", expected: false', () => {
  expect(main('listen', 'banana')).toBe(false);
});

test('Verificar se a palavra "dormitory" é um anagrama de outra "dirty room", expected: true', () => {
  expect(main('dormitory', 'dirty room')).toBe(true);
});

test('Verificar se a palavra "funeral" é um anagrama de outra "real fun", expected: true', () => {
  expect(main('funeral', 'real fun')).toBe(true);
});