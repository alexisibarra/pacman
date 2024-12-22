# Pacman

Given a "maze" where each value is considered a different sized dot, set Pacman in the middle of the maze and have the character "eat" dots corresponding to the greatest remaining value in each of the four allowable directions - left, right, top, down.

Pacman should continue "eating" the dots until there are no uneaten dots in each of the adjacent locations. At the end, print the the total value of the dots that Pacman has eaten.

## Example cases:

### Case 1

```
 console.log(
   eatDots([
     [1, 2, 3, 4, 5],
     [6, 7, 8, 9, 10],
     [11, 12, 13, 14, 15],
     [16, 17, 18, 19, 20],
     [21, 22, 23, 24, 25],
   ])
 );
```

Output here should be 325

13 -> 18 -> 23 -> 24 -> 25 -> 20...

### Case 2

```
console.log(
  eatDots([
    [28, 1, 3, 29, 5],
    [6, 7, 15, 19, 8],
    [11, 12, 13, 14, 25],
    [16, 10, 18, 19, 30],
    [21, 22, 23, 20, 9],
  ])
);
```

Output here should be 146

13 -> 18 -> 23 -> 22 -> 21 -> 16...

## To install

- Clone the repo
- Install dependencies: `yarn install`
- To run tests: `yarn test`
- To run:
  - Mofify the `scr/index.ts` with a maze and call eatDots with it
