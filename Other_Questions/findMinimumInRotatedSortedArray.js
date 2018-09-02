/*

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

Find the minimum element.

You may assume no duplicate exists in the array.

Example 1:

Input: [3,4,5,1,2]
Output: 1

Example 2:

Input: [4,5,6,7,0,1,2]
Output: 0

*/

// My solution;
function findMin(nums) {
  let targetMin = nums[0];

  let lowerBound = 0;
  let upperBound = nums.length - 1;

  while (lowerBound <= upperBound) {
    let midPoint = Math.floor((lowerBound + upperBound) / 2);
    let currNum = nums[midPoint];

    if (currNum < targetMin) {
      targetMin = currNum;
    }

    let leftPole = nums[lowerBound];
    let rightPole = nums[upperBound];

    if (leftPole < targetMin) {
      targetMin = leftPole;
    }

    if (rightPole < targetMin) {
      targetMin = rightPole;
    }

    let differenceFromLeft = Math.abs(currNum - leftPole);
    let differenceFromRight = Math.abs(currNum - rightPole);

    if (differenceFromRight === differenceFromLeft) {
      return targetMin;
    }

    if (differenceFromRight < differenceFromLeft) { // Go toward the pole that offers the greatest difference from the number at the midpoint to step closer toward the minimum;
      upperBound = midPoint - 1;
    }

    if (differenceFromRight > differenceFromLeft) { // Go toward the pole that offers the greatest difference from the number at the midpoint to step closer toward the minimum;
      lowerBound = midPoint + 1;
    }
  }

  return targetMin;
}

// Another solution provided by LeetCode, slightly refactored;
function findMin(nums) {
  let lowerBound = 0;
  let upperBound = nums.length - 1;

  while (lowerBound <= upperBound) {
    let leftPole = nums[lowerBound];
    let rightPole = nums[upperBound];

    if (leftPole <= rightPole) return leftPole;

    let midPoint = Math.floor((lowerBound + upperBound) / 2);

    if (nums[midPoint] >= leftPole) {
      lowerBound = midPoint + 1;
    }
    else {
      upperBound = midPoint;
    }
  }
}
