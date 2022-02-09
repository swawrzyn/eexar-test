import { fib, isFib, fibInv } from "../math";

describe("fib", () => {
  it("finds nth fibonacci number", () => {
    const fibNumbers = [
      0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597,
      2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418,
      317811,
    ];

    const testIndex = Math.ceil(Math.random() * fibNumbers.length) - 1;

    const res = fib(testIndex);

    expect(res).toEqual(fibNumbers[testIndex]);
  });
});

describe("isFib", () => {
  it("returns true if fibonacci number", () => {
    const fibNumbers = [
      0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597,
      2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418,
      317811,
    ];

    for (let i = 0; i < fibNumbers.length; i++) {
      const testIndex = Math.ceil(Math.random() * fibNumbers.length) - 1;

      const res = isFib(fibNumbers[testIndex]);
      expect(res).toEqual(true);
    }
  });
  it("returns false if not fibonacci number", () => {
    const notFibNumbers = [6, 7, 9, 10, 11, 12, 22, 23, 24, 25];

    for (let i = 0; i < notFibNumbers.length; i++) {
      const testIndex = Math.ceil(Math.random() * notFibNumbers.length) - 1;

      const res = isFib(notFibNumbers[testIndex]);
      expect(res).toEqual(false);
    }
  });
});

describe("fibInv", () => {
  it("finds the given n of a number if fibonacci if n > 2", () => {
    const fibNumbers = [
      0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597,
      2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418,
      317811,
    ];

    for (let i = 0; i < fibNumbers.length; i++) {
      const testIndex =
        Math.ceil(Math.random() * (fibNumbers.length - 1 - 3) + 3);

      const res = fibInv(fibNumbers[testIndex]);
      expect(res).toEqual(testIndex);
    }
  });
});
