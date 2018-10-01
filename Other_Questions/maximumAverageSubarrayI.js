/*

Given an array consisting of n integers, find the contiguous subarray of given length k that has the maximum average value.
And you need to output the maximum average value.

Example 1:
Input: [1,12,-5,-6,50,3], k = 4
Output: 12.75
Explanation: Maximum average is (12-5-6+50)/4 = 51/4 = 12.75

Note:
1 <= k <= n <= 30,000.
Elements of the given array will be in the range [-10,000, 10,000].

*/

// My solution;
// Time Complexity: O(n);
// Space Complexity: O(1);
// The idea is examine each chunk of values;
// Just as we would if were doing this with pencil and paper, we need to slide over one position to assess the following chunk;
// To achieve this goal, we can subtract the number that is the head of the current chunk, effectively sliding over one position in constant time;
// We can reassign the maxAverage accordingly as we iterate over the array of values;
function findMaxAverage(nums, k) {
  let maxAverage = -Infinity;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (i >= k - 1) {
      let currAverage = sum / k;
      if (currAverage > maxAverage) maxAverage = currAverage;
      let frontValueOfSection = nums[i - k + 1];
      sum -= frontValueOfSection;
    }
  }

  return maxAverage;
};
