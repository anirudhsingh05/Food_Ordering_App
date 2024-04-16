import { sum } from "../sum";

test('Sum fxn should return sum of two numbers', () => {
    const result = sum(3,2)
    expect(result).toBe(5);
});