/*

Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Example:

Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.

*/

// Leverage a depth-first search approach to traversing the matrix;
// Constraint: We can only travel south or east at any point in time;
// This does not necessarily mean that we always compare the southern value and the eastern value and take the minimum of the two;
// What this could entail is: finding all of the different sums that abide by the movement constraint and then grabbing the minimum of that collection of sums;

// We will always begin at grid[0][0];
// rowSize = grid[0][0].length;
// We will always conclude at grid[grid.length - 1][rowSize - 1];
// The southern value will be postioned at: grid[i+1][j];
// The eastern value will be positioned at: grid[i][j+1];

// If there is a value, then explore that pathway;
// If there is no legal value, then use 0 in its place (tentative/placeholder thought);

// Let's try out a simple example;

/*

[
  [1, 3],
  [4, 5]
]

1->3->5 === 9;
1->4->5 === 10;

Output: 9;

continuousPathSums = 

[
  [1, 4],
  [5, 9]

];

*/

// Keep track of the local sum;
// Keep track of the global sum;

// ERROR: Time Limit Exceeded;
function minPathSum(grid) {
  let minimumSum = Infinity; 
  
  let lastStopIdx = grid.length - 1;
  let lastStopJdx = grid[0].length - 1;
  
  function traversePaths(grid, i, j, pathSum = 0) {        
    if (i <= lastStopIdx && j <= lastStopJdx) {
      pathSum += grid[i][j];
      traversePaths(grid, i+1, j, pathSum);
      traversePaths(grid, i, j+1, pathSum); 
        if (i === lastStopIdx && j === lastStopJdx) {
        if (pathSum < minimumSum) {
          minimumSum = pathSum;
        }
      }
    }
  }
    
  traversePaths(grid, 0, 0);
  return minimumSum;
}

// Bottom-Up, Tabulation Approach;
function minPathSum(grid) {  
  let continuousPathSums = Array.from({ length: grid.length }, () => Array.from({ length: grid[0].length }, () => 0));

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      continuousPathSums[i][j] += grid[i][j];
      if (i > 0 && j > 0) {
        continuousPathSums[i][j] += Math.min(continuousPathSums[i-1][j], continuousPathSums[i][j-1]);
      }
      else if (i > 0) {
        continuousPathSums[i][j] += continuousPathSums[i-1][j];
      }
      else if (j > 0) {
        continuousPathSums[i][j] += continuousPathSums[i][j-1];
      }
    }
  }
  
  return continuousPathSums[grid.length - 1][grid[0].length - 1];
}