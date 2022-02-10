import nj from "@d4c/numjs/build/module/numjs.min.js";

/**
 *Makes a 2d array.
 *
 * @param {number} [val=0] Value to load into every cell.
 * @param {number} rows Number of rows.
 * @param {number} cols Number of columns.
 * @return {*} The 2d array.
 */
const make2dArray = (val = 0, rows: number, cols: number) => {
  const arr = nj.zeros([rows, cols]);

  if (val > 0) {
    arr.add(val, false);
  }

  return arr.tolist();
};

export { make2dArray };
