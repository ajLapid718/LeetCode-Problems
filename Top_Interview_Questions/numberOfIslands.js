/*

Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]

Output: 3

*/

// grid is an array of arrays;
// each subarray is composed of units of "1" and "0";
// "1" = land;
// "0" = water;
// maintain a counter that tracks the amount of islands;
// have the function return that counter;
// anything above the top-row is water;
// anything below the bottom-row is water;
// anything to the very-right of the rightmost-row is water;
// anything to the very-left of the leftmost-row is water;
// land connects via east-west and/or north-south, but not diagonally;

// how would I distinguish which units of "1" are all together to form one island?;
// in addition to that, how would I distinguish the units of "0" that closes off that island?;

// scan through each part of the grid;
// for each unit of "1", turn everything (neighboring units of "1") to the north, south, east, west of it into a unit of "0" --- when this is over, we should add one to the master counter because we have successfully identified and labeled one entire island;

function numIslands(grid) {
  if (grid === null || grid.length === 0) {
    return 0;
  }
  
  let amountOfIslands = 0;
  
  for (let i = 0; i < grid.length; i++) {
    let row = grid[i];
    for (let j = 0; j < row.length; j++) {
      let cell = row[j];
      if (cell === "1") {
        amountOfIslands += delinateIsland(grid, i, j);
      }
    }
  }
  
  return amountOfIslands;
}

function delinateIsland(grid, i, j) {
  // check above top-most row, check below bottom-most row, check left of left-most row, check right of right-most row, and check if current unit is water;
  if (i === -1 || i === grid.length || j === -1 || j === grid[i].length || grid[i][j] === "0") {
    return 0;
  }
  
  grid[i][j] = "0";
  
  delinateIsland(grid, i-1, j); // check north;
  delinateIsland(grid, i+1, j); // check south;
  delinateIsland(grid, i, j-1); // check west;
  delinateIsland(grid, i, j+1); // check east;
  
  return 1;
}