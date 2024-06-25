// tests/index.test.ts
import { greet } from '../src/script';

test('greets the user with "Hello, {name}!"', () => {
  expect(greet('nmk')).toBe('Hello, nmk!');
});
