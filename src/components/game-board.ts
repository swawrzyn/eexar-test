import add_worker from "comlink-shared:./game-worker";
import nj from "@d4c/numjs/build/module/numjs.min.js";
import { NdArray } from "@d4c/numjs";
import { checkFibonacciRow } from "./game-worker";

/**
 *Increments the tiles horizontally and vertically, given the coordinates.
 *
 * @param {number[][]} board The game board 2d array.
 * @param {number[]} coordinates The click coordinates.
 * @returns The updated game board.
 */
const incrementTiles = async (board: number[][], coordinates: number[]) => {
  const results: { [key: number]: number[] } = {};
  for (const [rowIndex, row] of board.entries()) {
    const instance = add_worker();
    const result = await instance.sumRowsCols(row, rowIndex, coordinates);

    results[rowIndex] = result;
  }

  for (const rowIndex in results) {
    board[rowIndex] = results[rowIndex];
  }

  return board;
};

/**
 *Increments the board tiles at once, using numjs manipulation.
 *
 * @param {number[][]} board The game board 2d array.
 * @param {number[]} coordinates The click coordinates
 * @return {*} The updated game board.
 */
const njIncrementTiles = async (arr: number[][], coordinates: number[]) => {
  const instance = add_worker();

  const newArr = await instance.njSumRowsCols(arr, coordinates);

  return newArr as number[][];
};

/**
 *Clears the consecutive fibonacci sequences from the board.
 *
 * @param {number[][]} board The game board 2d array.
 * @return {*} The game board 2d array.
 */
const clearFibSequences = async (board: number[][]) => {
  // check rows
  for (const [rowIndex, row] of board.entries()) {
    const instance = add_worker();
    const rowClear = await instance.checkFibonacciRow(row, 5);

    if (rowClear.length) {
      for (const cellIndex of rowClear) {
        board[rowIndex][cellIndex] = 0;
      }
    }
  }

  return board;
};

const njClearFibSequences = async (arr: number[][]) => {
  const newArr = nj.array(arr);

  const arrLen = newArr.shape[0];

  // check rows left to right
  for (let i = 0; i < arrLen; i++) {
    const row = newArr
      .slice([i, i + 1])
      .flatten()
      .tolist();

    const instance = add_worker();
    const rowClear = await instance.checkFibonacciRow(row, 5);

    if (rowClear.length) {
      for (const cellIndex of rowClear) {
        newArr.set(i, cellIndex, 0);
      }
    }
  }

  // check rows right to left
  for (let i = 0; i < arrLen; i++) {
    const row = newArr
      .slice([i, i + 1])
      .flatten()
      .slice([null, null, -1]) // reversing row
      .tolist();

    const instance = add_worker();
    const rowClear = await instance.checkFibonacciRow(row, 5);

    if (rowClear.length) {
      console.log("row clear!", rowClear);
      for (const cellIndex of rowClear) {
        newArr.set(i, arrLen - 1 - cellIndex, 0);
      }
    }
  }

  // check cols top to bottom
  for (let i = 0; i < arrLen; i++) {
    const row = newArr
      .slice(0, [i, i + 1])
      .flatten()
      .tolist();

    const instance = add_worker();
    const rowClear = await instance.checkFibonacciRow(row, 5);

    if (rowClear.length) {
      for (const rowIndex of rowClear) {
        newArr.set(rowIndex, i, 0);
      }
    }
  }

  // check cols bottom to top
  for (let i = 0; i < arrLen; i++) {
    const row = newArr
      .slice(0, [i, i + 1])
      .flatten()
      .slice([null, null, -1]) // reversing flattened col
      .tolist();

    const instance = add_worker();
    const rowClear = await instance.checkFibonacciRow(row, 5);

    if (rowClear.length) {
      for (const rowIndex of rowClear) {
        newArr.set(arrLen - 1 - rowIndex, i, 0);
      }
    }
  }

  return newArr.tolist() as number[][];
};

/**
 * Handles game board value changes and checks for fibonacci sequences.
 *
 * @param {number[][]} board The 2d array game board.
 * @param {number[]} coordinates The coordinates of the click.
 */
const handleTileClick = async (board: number[][], coordinates: number[]) => {
  let newBoard = await njIncrementTiles([...board], coordinates);

  newBoard = await njClearFibSequences(newBoard);

  return newBoard;
};

export { handleTileClick };
