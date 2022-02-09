import { fib, fibInv, isFib } from "../utils/math";

/**
 *Adds 1 to all the rows or columns, depending on rowIndex.
 *
 * @param {number[]} row The row to manipulate
 * @param {number} rowIndex The current row index.
 * @param {[number, number]} coordinates The coordinates of the click.
 * @return {*} The modified row.
 */
const sumRowsCols = (
  row: number[],
  rowIndex: number,
  coordinates: number[]
) => {
  if (rowIndex === coordinates[0]) {
    return row.map((x) => {
      return (x += 1);
    });
  } else {
    row[coordinates[1]]++;
    return row;
  }
};

/**
 * Recursive function to iterate through an array to check for a consecutive fibonacci sequence.
 *
 * @param {number[]} arr The 1d array (row) to check.
 * @param {number} index The start index.
 * @param {number} fibNum The last found nth fibonacci number.
 * @param {number[]} acc The accumulator array.
 * @param {number} sequenceLength The sequence length to check.
 * @return {*} The coordinate x values of the given row of a found consecutive fibonacci sequence.
 */
const fibCheckRec = (
  arr: number[],
  index: number,
  fibNum: number,
  acc: number[],
  sequenceLength: number
) => {
  if (index < arr.length - 1) {
    // check if fibNum is 1 because it could actually be 2.
    // Gotta check next number is either 1 or 2.
    if (fibNum == 1) {
      if (arr[index + 1] == 2) {
        fibNum = 2;
      } else if (fibNum != 1) {
        throw Error;
      }
      // gotta ignore 0 for the game.
    } else if (fibNum == 0) {
      throw Error;
    }

    if (fib(fibNum + 1) === arr[index + 1]) {
      if (acc.length + 1 < sequenceLength) {
        acc.push(index + 1);
        fibCheckRec(arr, index + 1, fibNum + 1, acc, sequenceLength);
      } else {
        acc.push(index + 1);
      }

      return acc;
    } else {
      throw Error;
    }
  } else {
    throw Error;
  }
};

/**
 *Checks the given game board row for consecutive fibonacci sequences.
 *
 * @param {number[]} row The game board row to check.
 * @param {number} [sequenceLength=5] The length of the fibonacci sequence to check.
 * @return {*} The x coordinates of found fibonacci sequences or a empty array.
 */
const checkFibonacciRow = (row: number[], sequenceLength: number = 5) => {
  const rowLength = row.length;
  let i = 0;

  while (i < rowLength - 1) {
    if (i + sequenceLength > rowLength) {
      return [];
    }
    const value = row[i];
    if (isFib(value)) {
      let fibNum = fibInv(value);

      try {
        return fibCheckRec(row, i, fibNum, [i], sequenceLength);
      } catch {
        i++;
      }
    } else {
      i++;
    }
  }
  return [];
};

export { sumRowsCols, fibCheckRec, checkFibonacciRow };
