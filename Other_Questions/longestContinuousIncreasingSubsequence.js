/*

Given an unsorted array of integers, find the length of longest continuous increasing subsequence (subarray).

Example 1:

Input: [1,3,5,4,7]
Output: 3
Explanation: The longest continuous increasing subsequence is [1,3,5], its length is 3.
Even though [1,3,5,7] is also an increasing subsequence, it's not a continuous one where 5 and 7 are separated by 4.

Example 2:

Input: [2,2,2,2,2]
Output: 1
Explanation: The longest continuous increasing subsequence is [2], its length is 1.

Note: Length of the array will not exceed 10,000.

*/

// My solution;
// Time Complexity: O(n);
// Space Complexity: O(1);
// Note: In the event that our array is in ascending order, the "else" condition will never execute;
// This would result in the currLength variable holding the length maximum length;
// For this reason, we need to find the maximum value between the master counter and the temp counter;
function findLengthOfLCIS(nums) {
  if (nums.length === 0) return 0;

  let maximumLength = 1;
  let currLength = 1;

  for (let i = 1; i < nums.length; i++) {
    let prev = nums[i-1];
    let curr = nums[i];
    if (curr > prev) {
      currLength++;
    }
    else {
      if (currLength > maximumLength) {
        maximumLength = currLength;
        currLength = 1;
      }
      else {
        currLength = 1;
      }
    }
  }

  return Math.max(maximumLength, currLength);
};
