/* istanbul ignore next */ 
import add_worker from "comlink-shared:./game-worker";

/**
 *Makes a 2d array.
 *
 * @param {number} [val=0] Value to load into every cell.
 * @param {number} rows Number of rows.
 * @param {number} cols Number of columns.
 * @return {*} The 2d array.
 */
const make2dArray = (val = 0, rows: number, cols: number) => {
  const array = new Array(cols);

  for (let i = 0; i < cols; i++) {
    array[i] = new Array(rows).fill(val);
  }

  return array as number[][];
};

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
    const result = await instance.sumRowsCols(
      JSON.parse(JSON.stringify(row)),
      rowIndex,
      coordinates
    );

    results[rowIndex] = result;
  }

  for (const rowIndex in results) {
    board[rowIndex] = results[rowIndex];
  }

  return board;
};

/**
 *Clears the consecutive fibonacci sequences from the board.
 *
 * @param {number[][]} board The game board 2d array.
 * @return {*} The game board 2d array.
 */
const clearFibSequences = async (board: number[][]) => {
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

/**
 * Handles game board value changes and checks for fibonacci sequences.
 *
 * @param {number[][]} board The 2d array game board.
 * @param {number[]} coordinates The coordinates of the click.
 */
const handleTileClick = async (board: number[][], coordinates: number[]) => {

  let boardCopy = [...board]

  boardCopy = await incrementTiles(boardCopy, coordinates)

  boardCopy = await clearFibSequences(boardCopy)

  return boardCopy
};

export { make2dArray, handleTileClick };
