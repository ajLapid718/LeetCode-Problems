/*

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

*/

function search(nums, target) {
  let lowerBound = 0;
  let upperBound = nums.length - 1;

  while (lowerBound <= upperBound) {
    let midPoint = Math.floor((lowerBound + upperBound) / 2);
    let currNum = nums[midPoint];

    let leftPole = nums[lowerBound];
    let rightPole = nums[upperBound];

    if (leftPole === target) return lowerBound;
    if (currNum === target) return midPoint;
    if (rightPole === target) return upperBound;

    if (currNum <= rightPole) { // We investigate the array from the middle element to the last element;
      if (currNum < target && target < rightPole) { // Check if the target lives between the middle element and the last element;
        lowerBound = midPoint + 1;
      }
      else {
        upperBound = midPoint - 1;
      }
    }

    if (currNum > rightPole) {
      if (leftPole < target && target < currNum) { // Check if the target lives between the first element and the middle element;
        upperBound = midPoint - 1
      }
      else {
        lowerBound = midPoint + 1;
      }
    }
  }

  return -1;
}
