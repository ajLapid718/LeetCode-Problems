/*

A peak element is an element that is greater than its neighbors.

Given an input array nums, where nums[i] ≠ nums[i+1], find a peak element and return its index.

The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

You may imagine that nums[-1] = nums[n] = -∞.

Example 1:

Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.

Example 2:

Input: nums = [1,2,1,3,5,6,4]
Output: 1 or 5
Explanation: Your function can return either index number 1 where the peak element is 2,
             or index number 5 where the peak element is 6.

Note:

Your solution should be in logarithmic complexity.

*/

function findPeakElement(nums) {
  if (nums.length === 1 || nums[0] > nums[1]) return 0;
  if (nums[nums.length-1] > nums[nums.length-2]) return nums.length-1;

  let lowerBound = 0;
  let upperBound = nums.length - 1;

  while (lowerBound <= upperBound) {
    let midPoint = Math.floor((lowerBound+upperBound)/2);

    let prev = nums[midPoint-1];
    let curr = nums[midPoint];
    let folo = nums[midPoint+1];

    if (prev < curr && curr > folo) return midPoint;

    if (curr < prev) {
      upperBound = midPoint - 1;
    }
    else {
      lowerBound = midPoint + 1;
    }
  }
}
