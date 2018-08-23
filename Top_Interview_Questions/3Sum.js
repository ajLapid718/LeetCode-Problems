/*

Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0 ?
Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]

*/

// Time Complexity: O(n^2) + O(n log n), which simplifies to O(n^2);
function threeSum(arr) {
  let res = [];
  if (!arr || arr.length < 3) return res;

  arr.sort((a, b) => a - b);
  if (arr[0] > 0) return res;

  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] !== arr[i-1]) {
      let j = i + 1
      let k = arr.length - 1;

      while (j < k) {
        let sum = arr[i] + arr[j] + arr[k];
        if (sum === 0) {
          res.push([arr[i], arr[j], arr[k]]);
          j++;
          k--;
          while (arr[i] === arr[j]) j++;
          while (arr[k] === arr[k+1]) k--;
        }
        if (sum < 0) j++;
        if (sum > 0) k--;
      }
    }
  }

  return res;
}
