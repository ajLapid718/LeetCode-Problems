/*

Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:

The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.

Example:

Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]

*/

// My solution;
// Time Complexity: O(n log n);
// Space Complexity: O(n);
function merge(nums1, m, nums2, n) {
  let counter = 0;

  while (counter < n) {
    nums1.pop();
    counter++;
  }

  nums1.push(...nums2);
  nums1 = nums1.sort((a,b) => a - b);
}

// The top solution provided by LeetCode;
// Time Complexity: O(n);
// Space Complexity: O(1);
function merge(nums1, m, nums2, n) {
  let idx = m - 1;
  let jdx = n - 1;

  for (let i = n + m - 1; i >= 0; i--) {
    if (idx === -1 || nums1[idx] < nums2[jdx]) {
      nums1[i] = nums2[jdx];
      jdx--;
    }
    else {
      nums1[i] = nums1[idx];
      idx--;
    }
  }
}
