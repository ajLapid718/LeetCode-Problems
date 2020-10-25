/*

A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

 

Example 1:


Input: m = 3, n = 7
Output: 28
Example 2:

Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down
Example 3:

Input: m = 7, n = 3
Output: 28
Example 4:

Input: m = 3, n = 3
Output: 6
 

Constraints:

1 <= m, n <= 100
It's guaranteed that the answer will be less than or equal to 2 * 109.

/*

// m = amount of rows;
// n = amount of columns;

// output: a count of all of the unique paths that exist based on the movement constraints and reaching the bottom-right corner of the grid;

// build up a table where each cell represents "the total amount of ways to arrive at that particular cell";

// the last cell will pull from the cell to the left of it and the cell right above it in order to express and finalize the total amount of ways to arrive at the [global] final destination;

/*

[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

m = 3;
n = 3;
output = 6;

// we should only include a unique path in our count if we reach the final destination;
// any path will take (m - 1) + (n - 1) amount of steps;
// once we have made that many steps, we can include that unique path in the count;

*/

// ERROR : Time Limit Exceeded;
function uniquePaths(m, n) {
  let count = 0;
  let grid = Array.from( { length: m }, () => Array.from( { length: n }, () => 0) );
  
  let stopIdx = m - 1;
  let stopJdx = n - 1;
  
  function traverse(arr, i = 0, j = 0) {
    if (arr[i] === undefined || arr[i][j] === undefined) {
      return;
    }
    
    if (i === stopIdx && j === stopJdx) {
      count++;
    }
    
    traverse(arr, i + 1, j);
    traverse(arr, i, j + 1);
  }
  
  traverse(grid);
  return count;
}

// Bottom-Up, Tabulation Where We Have A Replica Of The Grid and Solutions To All Subproblems;
function uniquePaths(m, n) {
  let grid = Array.from( { length: m }, () => Array.from( { length: n }, () => 1 ) );

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (i > 0 && j > 0) {
        grid[i][j] = grid[i-1][j] + grid[i][j-1];
      }
      else if (i > 0) {
        grid[i][j] = grid[i-1][j];
      }
      else if (j > 0) {
        grid[i][j] = grid[i][j-1];
      }
    }
  }

  return grid[grid.length - 1][grid[0].length - 1];
}

// [Space] Optimized Bottom-Up, Tabulation Where We Only Use A DP Table of Two Rows;
function uniquePaths(m, n) {
  let grid = Array.from( { length: 2 }, () => Array.from( { length: n }, () => 1 ) );

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i > 0 && j > 0) {
        grid[i % 2][j] = grid[(i - 1) % 2][j] + grid[i % 2][j-1];
      }
      else if (i > 0) {
        grid[i % 2][j] = grid[(i - 1) % 2][j];
      }
      else if (j > 0) {
        grid[i % 2][j] = grid[i % 2][j-1];
      }
    }
  }

  return grid[(m - 1) % 2][n-1];
}