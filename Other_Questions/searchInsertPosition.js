/*

Given a sorted array and a target value, return the index if the target is found.
If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Example 1:

Input: [1,3,5,6], 5
Output: 2

Example 2:

Input: [1,3,5,6], 2
Output: 1

Example 3:

Input: [1,3,5,6], 7
Output: 4

Example 4:

Input: [1,3,5,6], 0
Output: 0

*/

// My solution;
// Best case scenario: we find the element with binary search which is O(log n) in terms of time complexity;
// Worst case scenario: the binary search yields undefined and we still have to find the element by iterating through every element aka O(n);
function searchInsert(nums, target) {
  let outcome = found(nums, target);
  if (outcome >= 0) return outcome;

  let min = nums[0];
  let max = nums[nums.length-1];

  if (target < min) return 0;
  if (target > max) return nums.length;

  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];
    let folo = nums[i+1];
    if (target > curr && target < folo) return i+1;
  }
}

function found(arr, target) {
  let lowerBound = 0;
  let upperBound = arr.length - 1;

  while (lowerBound <= upperBound) {
    let midpoint = Math.floor((lowerBound + upperBound) / 2);
    let element = arr[midpoint];

    if (element === target) {
      return midpoint;
    }
    else if (target < element) {
      upperBound = midpoint - 1;
    }
    else {
      lowerBound = midpoint + 1;
    }
  }

  return undefined;
}

// An alternative solution provided by LeetCode;
function searchInsert(nums, target) {
  let i = 0;

  while (nums[i] < target && i < nums.length) {
    i++;
  }

  return i;
}
