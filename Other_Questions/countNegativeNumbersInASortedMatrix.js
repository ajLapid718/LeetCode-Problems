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