const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

describe('testing functionality of "divide" function', () => {
  test('divide 80 / 5 to equal 16', () => {
    expect(calculator.divide(80, 5)).toBe(16);
  });

  test('divide -5 / 5 to equal -1', () => {
    expect(calculator.divide(-5, 5)).toBe(-1);
  });

  test('should handle division by zero', () => {
    expect(calculator.divide(10, 0)).toBe("Can't use zero as second parameter");
  });
});

describe('testing functionality of "multiply" function', () => {
  test('multiply 80 * -5 to equal -400', () => {
    expect(calculator.multiply(80, -5)).toBe(-400);
  });

  test('multiply -5 * -5 to equal 25', () => {
    expect(calculator.multiply(-5, -5)).toBe(25);
  });
});
