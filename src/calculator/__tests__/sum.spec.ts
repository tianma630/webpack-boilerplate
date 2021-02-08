import { sum, minus } from '../sum';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(1);
  expect(sum(2, 2)).toBe(4);
  expect(minus(2, 1)).toEqual(1);
});
