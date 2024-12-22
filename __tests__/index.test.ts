import {
  getUpPoint,
  getDownPoint,
  getRightPoint,
  getLeftPoint,
  getNextPoints,
  eatDots,
} from "../src/index";

describe("getUpPoint", () => {
  test("Normal inner point with number up", () => {
    const maze = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25],
    ];

    expect(getUpPoint(maze, 2, 2)).toStrictEqual([1, 2]);
  });

  test("Left-Up corner should be undefined", () => {
    const maze = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25],
    ];

    expect(getUpPoint(maze, 0, 0)).toStrictEqual(undefined);
  });

  test("Right-Up corner should be undefined", () => {
    const maze = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25],
    ];

    expect(getUpPoint(maze, 0, 5)).toStrictEqual(undefined);
  });

  test("Normal inner point with zero up should be undefined", () => {
    const maze = [
      [1, 2, 3, 4, 5],
      [6, 7, 0, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25],
    ];

    expect(getUpPoint(maze, 2, 2)).toStrictEqual(undefined);
  });
});

describe("getDownPoint", () => {
  test("Normal inner point with number down", () => {
    const maze = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25],
    ];

    expect(getDownPoint(maze, 2, 2)).toStrictEqual([3, 2]);
  });

  test("Left-Down corner should be undefined", () => {
    const maze = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25],
    ];

    expect(getDownPoint(maze, 4, 0)).toStrictEqual(undefined);
  });

  test("Right-Down corner should be undefined", () => {
    const maze = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25],
    ];

    expect(getDownPoint(maze, 5, 5)).toStrictEqual(undefined);
  });

  test("Normal inner point with zero up should be undefined", () => {
    const maze = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 0, 19, 20],
      [21, 22, 23, 24, 25],
    ];

    expect(getDownPoint(maze, 2, 2)).toStrictEqual(undefined);
  });
});

describe("getRightPoint", () => {
  test("Normal inner point with number to the right", () => {
    const maze = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25],
    ];

    expect(getRightPoint(maze, 2, 2)).toStrictEqual([2, 3]);
  });

  test("Any full right point should be undefined", () => {
    const maze = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25],
    ];

    expect(getRightPoint(maze, 0, 5)).toStrictEqual(undefined);
  });

  test("Normal inner point with zero to the right should be undefined", () => {
    const maze = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 0, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25],
    ];

    expect(getRightPoint(maze, 2, 2)).toStrictEqual(undefined);
  });
});

describe("getLeftPoint", () => {
  test("Normal inner point with number down", () => {
    const maze = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25],
    ];

    expect(getLeftPoint(maze, 2, 2)).toStrictEqual([2, 1]);
  });

  test("Any full left point should be undefined", () => {
    const maze = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25],
    ];

    expect(getLeftPoint(maze, 2, 0)).toStrictEqual(undefined);
  });

  test("Normal inner point with zero up should be undefined", () => {
    const maze = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 0, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25],
    ];

    expect(getLeftPoint(maze, 2, 2)).toStrictEqual(undefined);
  });
});

describe("getNextPoints", () => {
  describe("Normal inner point with numbers in all directions", () => {
    describe("Case 1", () => {
      const maze = [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25],
      ];

      const nextPoints = getNextPoints(maze, 2, 2);

      test("There should be four points", () => {
        expect(nextPoints).toHaveLength(4);
      });

      test("points should be ordered", () => {
        expect(nextPoints).toStrictEqual([
          [3, 2],
          [2, 3],
          [2, 1],
          [1, 2],
        ]);
      });
    });

    describe("Case 2", () => {
      const maze = [
        [21, 16, 11, 6, 1],
        [22, 17, 12, 7, 2],
        [23, 18, 13, 8, 3],
        [24, 19, 14, 9, 4],
        [25, 20, 15, 10, 5],
      ];

      const nextPoints = getNextPoints(maze, 2, 2);

      test("There should be four points", () => {
        expect(nextPoints).toHaveLength(4);
      });

      test("points should be ordered", () => {
        expect(nextPoints).toStrictEqual([
          [2, 1],
          [3, 2],
          [1, 2],
          [2, 3],
        ]);
      });
    });
  });

  describe("Normal inner point with numbers in no up number", () => {
    const maze = [
      [1, 2, 3, 4, 5],
      [6, 7, 0, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25],
    ];

    const nextPoints = getNextPoints(maze, 2, 2);

    test("There should be only three points", () => {
      expect(nextPoints).toHaveLength(3);
    });
  });

  describe("Normal inner point with no to-go points", () => {
    const maze = [
      [1, 2, 3, 4, 5],
      [6, 7, 0, 9, 10],
      [11, 0, 13, 0, 15],
      [16, 17, 0, 19, 20],
      [21, 22, 23, 24, 25],
    ];

    const nextPoints = getNextPoints(maze, 2, 2);

    test("There should return no points", () => {
      expect(nextPoints).toHaveLength(0);
    });
  });
});

describe("eatDots", () => {
  describe("Case 1", () => {
    const maze = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25],
    ];

    const result = eatDots(maze);

    test("Should return 325", () => {
      expect(result).toBe(325);
    });
  });

  describe("Case 2", () => {
    const maze = [
      [28, 1, 3, 29, 5],
      [6, 7, 15, 19, 8],
      [11, 12, 13, 14, 25],
      [16, 10, 18, 19, 30],
      [21, 22, 23, 20, 9],
    ];

    const result = eatDots(maze);

    test("Should return 146", () => {
      expect(result).toBe(146);
    });
  });
});
