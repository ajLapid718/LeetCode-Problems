/*

---> Loop through each row of the matrix;
---> The moment the first number of the matrix is negative, we then know that every row below that matrix will contain negative numbers;
---> At that point, we can take the current master count PLUS (the amount of remaining rows [inclusive of the row we are at] MULTIPLED BY the size of the first row) and increment accordingly;

*/

function countNegatives(grid) {
  let count = 0;
  
  for (let i = 0; i < grid.length; i++) {
    let row = grid[i];
    for (let j = 0; j < row.length; j++) {
      let num = row[j];
      if (num < 0) {
        if (j === 0) {
          return count += (grid.length - i) * row.length;
        }
        count += row.length - j;
        break;
      }
    }
  }
  
  return count;
};

/*

---> Navigate negative numbers using a path that allows for a minimal amount of visits;
---> Loop through the matrix;
---> Our entry point will be the top-right corner of the matrix;
---> We will traverse the matrix from northeast to southwest;
---> If we encounter a negative number, we should continue moving from right-to-left, until we bump into a positive number;
---> Postulate: Because of the way the matrix is sorted, once we encounter a negative number, we know that every number in the matrix below that negative number is a negative number, which means we do not need to go through that entire column;
---> If we encounter a positive number, we should add the current count of negative numbers along the way and then we should abort the iteration within that row and continue onto the next row...effectively sliding down one column in the matrix;

tally up the entire column by taking the amount of rows MINUS the amount of rows already visited at this point;

OTHERWISE

move down the matrix along the same column in the following row;

*/

function countNegatives(grid) {
  let count = 0;
  let j = grid[0].length - 1;
  
  for (let i = 0; i < grid.length; i++) {
    let row = grid[i];
    while (j >= 0) {
      let num = row[j];
      if (num < 0) {
        count += (grid.length - i);
        j--;
      }
      else {
        break;
      }
    }
  }
  
  return count;
};