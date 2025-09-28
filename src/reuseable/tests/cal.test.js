// addition.test.js
import { addition } from '../addition';

describe("Addition Test cases", () => {
  test('add two numbers', () => {
    const add = addition(5, 5);
    expect(add).toBe(10);
  });
});
