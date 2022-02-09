/**
 *Finds the nth fibonacci sequence.
 *
 * @param {number} n The nth number in the sequence.
 * @return {*} The fibonacci number.
 */
const fib = (n: number) => {
  const sqRootOf5 = Math.sqrt(5);

  const phi1 = (1 + sqRootOf5) / 2;
  const phi2 = (1 - sqRootOf5) / 2;

  return Math.round((Math.pow(phi1, n) - Math.pow(phi2, n)) / sqRootOf5);
};

/**
 *Determines if number is a fibonacci number.
 *
 * @param {number} n The number to check.
 * @return {boolean} true/false
 */
const isFib = (n: number) => {
  if (n < 2) {
    return true;
  }

  const isPerfSq = (x: number) => {
    const sq = Math.round(Math.sqrt(x));

    return Math.pow(sq, 2) == x;
  };

  return isPerfSq(5 * n * n + 4) || isPerfSq(5 * n * n - 4);
};

/**
 *The inverse of fib function, for a given number find the nth.
 *
 * @param {number} n The fibonacci number... it MUST be a fibonacci number or bad results.
 * @return {*} Where the fibonacci number is, aka returns the n of fib(n).
 */
const fibInv = (n: number) => {
  const phi1 = (1 + Math.sqrt(5)) / 2;

  if (n < 2) {
    return n;
  }

  return Math.round(Math.log(n * 5 ** 0.5) / Math.log(phi1));
};

export { fib, isFib, fibInv };
