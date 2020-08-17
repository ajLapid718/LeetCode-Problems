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

/*

See it as a graph, and apply depth-first-search, treating each piece of land as a node;

*/

/*

The way this function works, from a bird's eye view, is as follows:

1) Declare a variable `perimeter` and initialize it with the value of 0;
2) We will do some processing and procedures in order to increment the value of the `perimeter` variable;
3) That is, if a piece of land (aka: a 1) neighbors either explicit water (aka: a 0) or implicit water (aka:
undefined), then increment the `perimeter` variable;
4) Return the `perimeter` variable;

One of the core aspects of this business logic is traversing the grid to access rows and columns;
We can access rows of the grid with an outer loop to travel through the grid row-by-row;
We can then access columns (aka: cells) of the grid with a nested/inner loop to travel through each row cell-by-cell;

Once we encounter the very first section of land (let's call this: `pioneer`), we can then walk through its neighbors;

The way we will walk through the neighbors of `pioneer` and then the neighbors of `pioneer's` neighbors,
and so on and so forth, will be through depth-first-search (aka: dfs);

We need to pass: a reference to the grid, the row we are on (unnecessary, but helpful and semantic), the
exact i-coordinate we are currently on (acts as a row identifier), the exact j-coordinate we are
currently on (acts as a column identifier);

We want to compute and calculate the perimeter, so we know each recursive call should be responsible for
building up an integer value;

This is why we start off with a `count` variable, which we will eventually return after all of the
sub-problems (via separate calls of the call stack) are solved;

The bird's eye view of the rest of the dfs helper function is as follows:

We have to do five checks to determine if the neighbor is water:

1: if i < 0, then that means i is = -1 (out of bounds), and this would occur if we are at the very top of the grid
1a: this head, top-piece of land that needs to check its northern-neighbor, which is undefined, should yield 1;

2: if i === grid.length, then that means i = grid.length (out of bounds), and this would occur if we are the very bottom
of the grid;
2a: this tail, bottom-piece of land that needs to check its southern-neighbor, which is undefined, should
yield 1;

3: if j < 0, then that means j is = -1 (out of bounds), and this would occur if we are at the very beginning of a row;
3a: at this point, if we need to check the western-neighbor, which is undefined, then we should yield 1;

4: if j === row.length, then that means j is === row.length (out of bounds), and this would occur if we
are the very end of a row;
4a: at this point, if we need to check the eastern-neighbor, which is undefined, then we should yield 1;

5: if grid[i][j] === 0, then that means the cell we are at is implicit water (water within bounds), and
this would occur if we are at any 0 within the grid;
5a: at this point, we should yield 1;

If we bypass all of those checks and conditions, then we must be on some land (a 1 value) within the
bounds of the grid;

That is, to say, we aren't at the very top of the grid, very bottom of the grid, very beginning of the
row, very end of the row, or implicit water;

If we did trigger one of the checks and conditions, then we are informed that we have located a neighbor
of water, and we could increment the count, and that'll be that;

But, with the way this procedure is designed, THAT ALONE IS NOT ENOUGH TO SAFELY TERMINATE THE STACK OF
RECURSIVE CALLS; 

More on that later*;
Continuing on...

We should see if we have already visited this particular section of the grid previously;
If we have, then return 0, because we want to avoid double-count;
If we have not, then we should mark it as having been visited;
We only have to mark land within the bounds;

We can then proceed to the recursive cases where we will check neighbors of the current piece of land
based on these directions relative to that current piece of land: north, south, west, east;

Now, we break into the recursive calls (and form a tree/stack of recursive calls):

Let's take one of the simplest cases, a grid with two rows that looks like this, and step through it:

[
  [0,1,0,0],
  [1,1,1,0],
]

---> We land on grid[0][1], and then invoke the bottom-of-the-stack-call: dfs(grid, row, 0, 1);

CALL STACK: 

|  dfs(grid, row, 0, 1)  |

---> We bypass all checks, mark grid[0][1] as being visited, and then invoke another dfs call to check
north: dfs(grid, row, -1, 1);

CALL STACK: 

|  dfs(grid, row, -1, 1) |
|  dfs(grid, row, 0, 1)  |

---> That most recent call will yield 1, and it will pop off the call stack;

CALL STACK: 

|  dfs(grid, row, 0, 1)  |

---> We then continue along with the original call, and we invoke another dfs call to check south:
dfs(grid, row, 1, 1);

CALL STACK: 

|  dfs(grid, row, 1, 1)  |
|  dfs(grid, row, 0, 1)  |

---> We mark the southern neighbor grid[1][1] as visited, and then we check the northern neighbor by
making another dfs call to check north: dfs(grid, row, 0, 1);
---> THIS IS WHY IT'S CRITICAL TO KEEP TRACK OF VISITED VALUES, BECAUSE THEN WE WOULD BE RICOCHETING
BETWEEN CALLS/PIECES OF LAND (and, even without that fatal error, we'd be backtracking all the way, too
--- thus creating a lose-lose situation we want to avoid);

CALL STACK: 

|  dfs(grid, row, 0, 1)  |
|  dfs(grid, row, 1, 1)  |
|  dfs(grid, row, 0, 1)  |

---> The most recent call to the call stack will yield 0 because we already visited it;
---> We can then pop it off of the call stack;

CALL STACK: 

|  dfs(grid, row, 1, 1)  |
|  dfs(grid, row, 0, 1)  |

---> Continuing along, we would make another call to dfs to check the southern neighbor (undefined): dfs(grid, row,
2, 1);

CALL STACK: 

|  dfs(grid, row, 2, 1)  |
|  dfs(grid, row, 1, 1)  |
|  dfs(grid, row, 0, 1)  |

---> This most recent call will come across an "undefined" and therefore yield 1;
---> We can then pop it off of the call stack like so:

CALL STACK: 

|  dfs(grid, row, 1, 1)  |
|  dfs(grid, row, 0, 1)  |

---> Continuing along, we can then run another call to dfs to check the western neighbor: dfs(grid, row,
1, 0);

CALL STACK: 

|  dfs(grid, row, 1, 0)  |
|  dfs(grid, row, 1, 1)  |
|  dfs(grid, row, 0, 1)  |

---> We will then mark grid[1][0] as being visited;
---> At this time, we will then break into another dfs call to check that section of land's neighbors;
---> So, immediately, we will call dfs to check the northern neighbor: (grid, row, 0, 0);

CALL STACK: 

|  dfs(grid, row, 0, 0)  |
|  dfs(grid, row, 1, 0)  |
|  dfs(grid, row, 1, 1)  |
|  dfs(grid, row, 0, 1)  |

---> That most recent call will yield 0 and we can pop it off of the call stack;

CALL STACK: 

|  dfs(grid, row, 1, 0)  |
|  dfs(grid, row, 1, 1)  |
|  dfs(grid, row, 0, 1)  |

---> We then need to check the southern, western, and eastern neighbor of that slot of land;
---> At this time, we will run another dfs call to check that section of land's southern neighbor;
---> dfs(grid, row, 2, 0);

CALL STACK: 

|  dfs(grid, row, 2, 0)  |
|  dfs(grid, row, 1, 0)  |
|  dfs(grid, row, 1, 1)  |
|  dfs(grid, row, 0, 1)  |

---> That most recent call will yield 1 and we can pop it off of the stack;

CALL STACK: 

|  dfs(grid, row, 1, 0)  |
|  dfs(grid, row, 1, 1)  |
|  dfs(grid, row, 0, 1)  |

---> We then need to continue to check the western neighbor of that slot of land;
---> We make another dfs call, dfs(grid, row, 1, -1);

CALL STACK: 

|  dfs(grid, row, 1, -1) |
|  dfs(grid, row, 1, 0)  |
|  dfs(grid, row, 1, 1)  |
|  dfs(grid, row, 0, 1)  |

---> That most recent call will yield 1 and we can pop it off of the stack;

CALL STACK: 

|  dfs(grid, row, 1, 0)  |
|  dfs(grid, row, 1, 1)  |
|  dfs(grid, row, 0, 1)  |

---> Now we need to call dfs for the eastern neighbor (previously visited);
---> dfs(grid, row, 1, 1);

CALL STACK: 

|  dfs(grid, row, 1, 1)  |
|  dfs(grid, row, 1, 0)  |
|  dfs(grid, row, 1, 1)  |
|  dfs(grid, row, 0, 1)  |

---> That most recent call would yield 0 because we already visited that piece of land and we can pop it
off of the stack;

CALL STACK: 

|  dfs(grid, row, 1, 0)  |
|  dfs(grid, row, 1, 1)  |
|  dfs(grid, row, 0, 1)  |

---> NOW that we've completed that function we were suspended at for a while, we can return the count and pop it off of the call stack;

CALL STACK: 

|  dfs(grid, row, 1, 1)  |
|  dfs(grid, row, 0, 1)  |

---> For this function, we already checked the northern, southern, and western neighbor;
---> We can now check the eastern neighbor;
---> Call: dfs(grid, row, 1, 2); 

CALL STACK: 

|  dfs(grid, row, 1, 2)  |
|  dfs(grid, row, 1, 1)  |
|  dfs(grid, row, 0, 1)  |

---> We can then check the northern, southern, western, and eastern neighbor of this function call;
---> For the northern neighbor, we would call: dfs(grid, row, 0, 2);

CALL STACK: 

|  dfs(grid, row, 0, 2)  |
|  dfs(grid, row, 1, 2)  |
|  dfs(grid, row, 1, 1)  |
|  dfs(grid, row, 0, 1)  |

---> The most recent call will yield 0, and we can pop it off of the call stack;

CALL STACK:

|  dfs(grid, row, 1, 2)  |
|  dfs(grid, row, 1, 1)  |
|  dfs(grid, row, 0, 1)  |

---> For the southern neighbor, we would call: dfs(grid, row, 2, 2);

CALL STACK:

|  dfs(grid, row, 2, 2)  |
|  dfs(grid, row, 1, 2)  |
|  dfs(grid, row, 1, 1)  |
|  dfs(grid, row, 0, 1)  |

---> The most recent call will yield 1 and we can pop it off of the call stack;

CALL STACK:

|  dfs(grid, row, 1, 2)  |
|  dfs(grid, row, 1, 1)  |
|  dfs(grid, row, 0, 1)  |

---> For the western neighbor, would call: dfs(grid, row, 1, 1);

CALL STACK:

|  dfs(grid, row, 1, 1)  |
|  dfs(grid, row, 1, 2)  |
|  dfs(grid, row, 1, 1)  |
|  dfs(grid, row, 0, 1)  |

---> The most recent call will yield 0, because we already visited it and we could pop it off of the call
tack;

CALL STACK:

|  dfs(grid, row, 1, 2)  |
|  dfs(grid, row, 1, 1)  |
|  dfs(grid, row, 0, 1)  |

---> We can now explore the eastern neighbor, which is a 0/water, so that will return 1;

CALL STACK:

|  dfs(grid, row, 1, 3)  |
|  dfs(grid, row, 1, 2)  |
|  dfs(grid, row, 1, 1)  |
|  dfs(grid, row, 0, 1)  |

---> We, like we said, return 1, and then we can pop that off of the call stack;

CALL STACK:

|  dfs(grid, row, 1, 2)  |
|  dfs(grid, row, 1, 1)  |
|  dfs(grid, row, 0, 1)  |

---> We finally checked all of the neighbors for this piece of land, so we can pop it off of the call
stack;

CALL STACK:

|  dfs(grid, row, 1, 1)  |
|  dfs(grid, row, 0, 1)  |

---> We finally check all of the neighbors for this piece of land, so we can pop it off of the call
stack;

CALL STACK:

|  dfs(grid, row, 0, 1)  |

---> WE HAVE BEEN SUSPENDED HERE FOR A WHILE, AND NOW WE GOTTA CHECK THE WESTERN NEIGHBOR AND EASTERN
NEIGHBOR, RESPECTIVELY, BOTH OF WHICH WILL YIELD 1;
---> dfs(grid, row, 0, 0);

CALL STACK:

|  dfs(grid, row, 0, 0)  |
|  dfs(grid, row, 0, 1)  |

---> Yield 1, pop it off the call stack;

CALL STACK:

|  dfs(grid, row, 0, 1)  |

---> call dfs(grid, row, 0, 2) for the eastern neighbor;

CALL STACK:

|  dfs(grid, row, 0, 2)  |
|  dfs(grid, row, 0, 1)  |

---> Yield 1, pop it off the call stack;

CALL STACK:

|  dfs(grid, row, 0, 1)  |

---> WE ARE FINALLY DONE; POP IT OFF OF THE CALL STACK;

CALL STACK:

| <empty> |

---> Return count (I should've done this horizontally);

---> We would then have to unwind the call stack from there (well, we would still have to check on
eastern neighbors still before we unwind and backtrack and complete the parent-most-call);

*/

// Maybe don't pass the entire row at-hand to the recursive calls, if we are dealing with a rectangle, then we
// could just reference the length of the very first row;
// Passing in the entire row would help, though, if the rows were varying sizes, I suppose;

function numberOfIslands(grid) {
  let perimeter = 0;

  for (let i = 0; i < grid.length; i++) {
    let row = grid[i];
    for (let j = 0; j < row.length; j++) {
      let column = row[j];
      if (column === 1) {
        perimeter += dfs(grid, row, i, j);
      }
    }
  }

  return perimeter;
}

function dfs(grid, row, i, j) {
  let count = 0;
  
  if (i < 0 || i === grid.length || j < 0 || j === row.length || grid[i][j] === 0) {
    return 1;
  }
  
  if (grid[i][j] === "#") {
    return 0;
  }
  else {
    grid[i][j] = "#";
  }

  count += dfs(grid, row, i-1, j); // check north; // if i < 0, then it's water;
  count += dfs(grid, row, i+1, j); // check south; // if i === grid.length, then it's water;
  count += dfs(grid, row, i, j-1); // check west; // if j < 0, then it's water;
  count += dfs(grid, row, i, j+1); // check east; // if j === row.length, then it's water;

  return count;
}

// let grid = [
//   [0,1,0,0],
//   [1,1,1,0],
//   [0,1,0,0],
//   [1,1,0,0]
// ];

// console.log(numberOfIslands(grid));