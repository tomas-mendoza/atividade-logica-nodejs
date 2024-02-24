const main = require('../atividade18');

test('Inverter um string "banana", expected: "ananab"', () => {
  expect(main('banana')).toBe('ananab');
});

test('Inverter um string "racecar", expected: "racecar"', () => {
  expect(main('racecar')).toBe('racecar');
});

test('Inverter um string "", expected: ""', () => {
  expect(main('')).toBe('');
});