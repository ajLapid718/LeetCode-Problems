/*

You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water.

Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

Example:

Input:
[[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]

Output: 16

Explanation: The perimeter is the 16 yellow stripes in the image below:

*/

/*

Some initial and tentative observations, given these conditions and stipulations:

- If you are a piece of land, you exist in certain general states:
  - State 1: You solely neighbor another piece of land (either one neighbor, two neighbors, three neighbors, or four neighbors);
  - State 2: You neighbor land and water within the grid (aka: a 0);
  - State 3: You neighbor the very edge of the grid (aka: an undefined);
  
We could try to visit all of the neighbors (North, East, South, West) that surround the current piece of land that we are on;

We could sections of water;

We could track a running sum:
Once on a piece of land, we would increase sum if:
- one of its neighbors are 0;
- one of its neighbors are undefined;

Are there any repetitive calculations we are conducting?;

- Yes: When we know a piece of land (x) is next to the following piece of land (y), then we know that we don't have to check x when our iteration brings us to y;

  // outer loop to select row;
  // inner loop to select elements (columns, technically) within row;
  // for each element [i, j], we should run all the scans and get back the sum;
  // return the sum eventually;
  // each scan function should take in a reference to the grid, the current idx (row number), the current jdx (column);

*/

function islandPerimeter(grid) {
  let perimeter = 0;
  
  for (let i = 0; i < grid.length; i++) {
    let row = grid[i];
    for (let j = 0; j < row.length; j++) {
      let column = row[j];
      if (column === 1) {
        perimeter += checkNorth(grid, i, j);
        perimeter += checkSouth(grid, i, j);
        perimeter += checkEast(grid, row, i, j);
        perimeter += checkWest(grid, i, j);
      }
    }
  }
  
  return perimeter;
}

function checkNorth(grid, i, j) {
  if (i === 0) return 1;
  let val = 0;
  
  switch(grid[i-1][j]) {
    case undefined:
      val++;
      break;
    case 0:
      val++;
      break;
    default:
      break;
  }
  
  return val;
}

function checkSouth(grid, i, j) {
  if (i === grid.length - 1) return 1;
  let val = 0;
  
  switch(grid[i+1][j]) {
    case undefined:
      val++;
      break;
    case 0:
      val++;
      break;
    default:
      break;
  }
  
  return val;  
}

function checkEast(grid, row, i, j) {
  if (j === row.length - 1) return 1;
  let val = 0;
  
  switch(grid[i][j+1]) {
    case undefined:
      val++;
      break;
    case 0:
      val++;
      break;
    default:
      break;
  }
  
  return val;
}

function checkWest(grid, i, j) {
  if (j === 0) return 1;
  let val = 0;
  
  switch(grid[i][j-1]) {
    case undefined:
      val++;
      break;
    case 0:
      val++;
      break;
    default:
      break;
  }
  
  return val;
}
