/*

Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

*/

// Time Complexity: O(log n) + O(log n), which simplifies to O(log n);
// Space Complexity: O(1);
function searchRange(nums, target) {
  let firstPos = bSearch(nums, target, "left");
  let lastPos = bSearch(nums, target, "right");
  return [firstPos, lastPos];
}

function bSearch(nums, target, side) {
  let targetIdx = -1;

  let lowerBound = 0;
  let upperBound = nums.length - 1;

  while (lowerBound <= upperBound) {
    let midPoint = Math.floor((lowerBound+upperBound)/2);
    let currentNum = nums[midPoint];

    if (currentNum === target) {
      targetIdx = midPoint;
      if (side === "left") upperBound = midPoint - 1;
      if (side === "right") lowerBound = midPoint + 1;
    }

    if (currentNum < target) lowerBound = midPoint + 1;
    if (currentNum > target) upperBound = midPoint - 1;
  }

  return targetIdx;
}

/*

More test cases below.

let inputOne = [1];
let inputTwo = [3,3,3];

console.log(searchRange(inputOne, 1)); // [0, 0];
console.log(searchRange(inputTwo, 3)); // [0, 2];

*/
