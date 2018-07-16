/*

Given two arrays, write a function to compute their intersection.

Example:

Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

Note:

Each element in the result must be unique.
The result can be in any order.

*/

// Time Complexity: O(n);
// Space Complexity: O(n);
function intersection(nums1, nums2) {
  let objOne = {};
  let objTwo = {};
  let intersectingNums = [];

  for (let i = 0; i < nums1.length; i++) {
    let num = nums1[i];
    objOne[num] = objOne[num] + 1 || 1;
  }

  for (let i = 0; i < nums2.length; i++) {
    let num = nums2[i];
    objTwo[num] = objTwo[num] + 1 || 1;
  }

  for (let key in objOne) {
    let val = objOne[key];
    if (objTwo.hasOwnProperty(key)) intersectingNums.push(+key);
  }

  return intersectingNums;
}
