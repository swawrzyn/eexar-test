import { make2dArray } from "../array";

describe("make2dArray", () => {
  test("should create 2d array successfully", () => {
    const expected = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ];

    const ret = make2dArray(0, 5, 5);

    for (const [rowIndex, row] of expected.entries()) {
      for (const [cellIndex, cell] of row.entries()) {
        expect(ret[rowIndex][cellIndex]).toBe(cell);
      }
    }
  });
});
