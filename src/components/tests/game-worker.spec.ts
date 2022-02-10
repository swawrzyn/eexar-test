import nj from "@d4c/numjs";
import {
  checkFibonacciRow,
  fibCheckRec,
  sumRowsCols,
  njSumRowsCols,
} from "../game-worker";

describe("sumRowsCols", () => {
  test("should add one to row and column of target coordinate", () => {
    const expected = [
      [0, 1, 0, 0, 0],
      [0, 1, 0, 0, 0],
      [1, 1, 1, 1, 1],
      [0, 1, 0, 0, 0],
      [0, 1, 0, 0, 0],
    ];

    const startArray = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ];

    const resArray = [];

    for (const [rowIndex, row] of startArray.entries()) {
      resArray.push(sumRowsCols(row, rowIndex, [2, 1]));
    }

    for (const [rowIndex, row] of expected.entries()) {
      for (const [cellIndex, cell] of row.entries()) {
        expect(resArray[rowIndex][cellIndex]).toBe(cell);
      }
    }
  });
});

describe("sumRowsCols", () => {
  test("should add one to row and column of target coordinate", () => {
    const expected = [
      [0, 0, 0, 0, 1],
      [0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1],
      [0, 0, 0, 0, 1],
      [0, 0, 0, 0, 1],
    ];

    const startArray = nj.zeros([5, 5]).tolist() as number[][];

    const resArray = njSumRowsCols(startArray, [2, 4]);

    for (const [rowIndex, row] of expected.entries()) {
      for (const [cellIndex, cell] of row.entries()) {
        expect(resArray[rowIndex][cellIndex]).toBe(cell);
      }
    }
  });
});

describe("fibCheckRec", () => {
  test("should find complete fib sequence in array forward", () => {
    const testArray = [21, 34, 55, 89, 144];

    const expected = [0, 1, 2, 3, 4];

    const res = fibCheckRec(testArray, 0, 8, [0], 5);

    expect(res).toEqual(expected);
  });
});

describe("checkFibonacciRow", () => {
  test("should find fibonacci in row and return array of coordinates.", () => {
    const testArray = [0, 1, 5, 2, 3, 21, 34, 55, 89, 144, 7, 2];

    const expectedCoordinates = [5, 6, 7, 8, 9];

    const res = checkFibonacciRow(testArray, 5);

    for (const [index, item] of expectedCoordinates.entries()) {
      expect(res[index]).toEqual(item);
    }
  });
});
