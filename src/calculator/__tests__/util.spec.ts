import { getEnv } from '../util/index';

test('get env', () => {
  expect(getEnv()).toBe('app');
});
