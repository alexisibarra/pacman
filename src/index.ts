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

export const eatDots: EatDots = (
  maze,
  previousRow = undefined,
  previousColumn = undefined
) => {
  // column and row are the coordinates of pacman
  const column =
    previousColumn !== undefined
      ? previousColumn
      : Math.floor(maze[0].length / 2);
  const row =
    previousRow !== undefined ? previousRow : Math.floor(maze.length / 2);

  const valueEaten = maze[row][column];

  const nextPoints = getNextPoints(maze, row, column);

  const isThereSomethingToEat = nextPoints.length > 0;

  if (!isThereSomethingToEat) {
    return valueEaten;
  }

  const nextPoint = nextPoints[0] as Coordinate;

  maze[row][column] = 0;

  return valueEaten + eatDots(maze, nextPoint[0], nextPoint[1]);
};
