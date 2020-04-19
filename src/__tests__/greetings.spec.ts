import { greetings } from '../index';

test('greetings', () => {
  expect(greetings('World')).toBe('Hello World');
});
