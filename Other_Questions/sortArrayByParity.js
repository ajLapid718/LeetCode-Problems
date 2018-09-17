/*

Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

You may return any answer array that satisfies this condition.

Example 1:

Input: [3,1,2,4]
Output: [2,4,3,1]

The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

Note:

1 <= A.length <= 5000
0 <= A[i] <= 5000

*/

// My solution;
// Time Complexity: O(n);
// Space Complexity: O(n);
function sortArrayByParity(arr) {
  let evens = [];
  let odds = [];

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num % 2 === 0) {
      evens.push(num);
    }
    else {
      odds.push(num);
    }
  }

  return evens.concat(odds);
}

// Alternatively;
// Time Complexity: O(n);
// Space Complexity: O(1);
function sortArrayByParity(arr) {
  let front = 0;
  let back = arr.length - 1;

  while (front < back) {
    if (arr[front] % 2 !== 0) {
      if (arr[back] % 2 === 0) {
        swap(arr, front, back);
      }
      else {
        while (arr[back] % 2 !== 0 && front < back) back--;
        swap(arr, front, back);
      }
    }

    front++;
  }

  return arr;
}

function swap(arr, idxOne, idxTwo) {
  let temp = arr[idxOne];
  arr[idxOne] = arr[idxTwo];
  arr[idxTwo] = temp;
}
