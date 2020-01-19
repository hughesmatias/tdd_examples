var assert = require('assert');

const fibonacciFn = (number) => {
  if (number == 0) return 0;
  if (number == 1 || number == 2) return 1;
  else if (number > 2) {
    return fibonacciFn(number -1) + fibonacciFn(number -2)
  }
}

describe('First test>', () =>
  describe('fibonacci', () => {
    it('Fibonacci of number 0', () => assert.equal(0, fibonacciFn(0)))
    it('Fibonacci of number 1', () => assert.equal(1, fibonacciFn(1)))
    it('Fibonacci of number 2', () => assert.equal(1, fibonacciFn(2)))
    it('Fibonacci of number 3', () => assert.equal(2, fibonacciFn(3)))
    it('Fibonacci of number 3', () => assert.equal(3, fibonacciFn(4)))
  })
)