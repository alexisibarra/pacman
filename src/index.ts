type Maze = number[][];

type Coordinate = [number, number];

type PointGetter = (
  maze: Maze,
  row: number,
  column: number
) => Coordinate | undefined;

export const getUpPoint: PointGetter = (maze, row, column) => {
  return row - 1 >= 0 && maze[row - 1][column] > 0
    ? [row - 1, column]
    : undefined;
};

export const getDownPoint: PointGetter = (maze, row, column) => {
  return row + 1 < maze[0].length && maze[row + 1][column] > 0
    ? [row + 1, column]
    : undefined;
};

export const getLeftPoint: PointGetter = (maze, row, column) => {
  return column - 1 >= 0 && maze[row][column - 1] > 0
    ? [row, column - 1]
    : undefined;
};

export const getRightPoint: PointGetter = (maze, row, column) => {
  return column + 1 < maze.length && maze[row][column + 1] > 0
    ? [row, column + 1]
    : undefined;
};

type GetNextPoints = (maze: Maze, row: number, column: number) => Coordinate[];

export const getNextPoints: GetNextPoints = (maze, row, column) => {
  const up = getUpPoint(maze, row, column);
  const down = getDownPoint(maze, row, column);
  const left = getLeftPoint(maze, row, column);
  const right = getRightPoint(maze, row, column);

  const points = [up, down, left, right].filter(Boolean) as Coordinate[];

  return points.sort((coordinateA, coordinateB) => {
    const rowA = coordinateA[0];
    const columnA = coordinateA[1];
    const rowB = coordinateB[0];
    const columnB = coordinateB[1];

    if (maze[rowA][columnA] < maze[rowB][columnB]) {
      return 1;
    }

    if (maze[rowA][columnA] > maze[rowB][columnB]) {
      return -1;
    }

    return 0;
  });
};

type EatDots = (
  maze: Maze,
  previousRow?: number,
  previousColumn?: number
) => number;

const eatDots: EatDots = (
  maze,
  previousRow = undefined,
  previousColumn = undefined
) => {
  // column and row are the coordinates of pacman
  const column = previousColumn || Math.floor(maze[0].length / 2);
  const row = previousRow || Math.floor(maze.length / 2);

  const valueEaten = maze[row][column];

  const nextPoints = getNextPoints(maze, row, column);

  const isThereSomethingToEat = nextPoints.length > 0;

  console.log({ row, column, maze, nextPoints });

  if (!isThereSomethingToEat) {
    console.log({ maze });
    return valueEaten;
  }

  const nextPoint = nextPoints[0] as Coordinate;
  console.log({ nextPoints });

  maze[row][column] = 0;

  console.log({ maze });

  return valueEaten + eatDots(maze, nextPoint[0], nextPoint[1]);
};

console.log(
  eatDots([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ])
);
// Output here should be 325
// 13 -> 18 -> 23 -> 24 -> 25 -> 20...

// 325

// console.log(
//   eatDots([
//     // [ 1,  2,  3,  4,  5],
//     // [ 6,  7,  8,  9, 10],
//     // [11, 12, 13, 14, 15],
//     // [16, 17, 18, 19, 20],
//     // [21, 22, 23, 24, 25]

//     [ 1,  0,  3,  0,  5],
//     [ 0,  7,  2,  9, 0],
//     [11, 0, 0, 0, 15],
//     [0, 17, 0, 19, 0],
//     [21, 0, 23, 0, 25]
//   ])
// );

// 13+5+23

// console.log(
//   eatDots([
//     [28,  1,  3, 29,  5],
//     [ 6,  7, 15, 19,  8],
//     [11, 12, 13, 14, 25],
//     [16, 10, 18, 19, 30],
//     [21, 22, 23, 20,  9]
//   ])
// );
// Output here should be 146
// 13 -> 18 -> 23 -> 22 -> 21 -> 16...

/*
Given a "maze" where each value is considered a different sized dot, set Pacman in the middle of the maze and have the character "eat" dots corresponding to the greatest remaining value in each of the four allowable directions - left, right, top, down.

Pacman should continue "eating" the dots until there are no uneaten dots in each of the adjacent locations. At the end, print the the total value of the dots that Pacman has eaten.

*/
