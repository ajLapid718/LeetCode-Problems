/*

Given an array of integers nums, write a method that returns the "pivot" index of this array.

We define the pivot index as the index where the sum of the numbers to the left of the index is equal to the sum of the numbers to the right of the index.

If no such index exists, we should return -1.
If there are multiple pivot indexes, you should return the left-most pivot index.

Example 1:

Input:
nums = [1, 7, 3, 6, 5, 6]

Output: 3

Explanation:
The sum of the numbers to the left of index 3 (nums[3] = 6) is equal to the sum of numbers to the right of index 3.
Also, 3 is the first index where this occurs.

Example 2:

Input:
nums = [1, 2, 3]

Output: -1

Explanation:
There is no index that satisfies the conditions in the problem statement.

Note:

The length of nums will be in the range [0, 10000].
Each element nums[i] will be an integer in the range [-1000, 1000].

*/

// Sub-optimal solution due to auxillary space;
function findEvenIndex(arr) {
  let left = {};
  let right = {};

  let leftSum = 0;
  let rightSum = 0;

  for (let i = 0, j = arr.length - 1; i < arr.length; i++, j--) {
    let leftNum = arr[i];
    leftSum += leftNum;
    left[i] = leftSum;

    let rightNum = arr[j];
    rightSum += rightNum;
    right[j] = rightSum;
  }

  for (let idx in left) {
    if (left[idx] === right[idx]) {
      return Number(idx);
    }
  }

  return -1;
}

// Time Complexity: O(n) && Space Complexity: O(1);
function findEvenIndex(arr) {
  let sum = 0;
  let leftSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    sum += num;
  }

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let rightSum = sum - leftSum - num;
    if (leftSum === rightSum) return i;
    leftSum += num;
  }

  return -1;
}
