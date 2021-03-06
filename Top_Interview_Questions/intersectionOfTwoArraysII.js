/*

Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].

Note:
Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.

Follow up:
What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

*/

function intersect(nums1, nums2) {
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
    let otherVal = objTwo[key];
    let minFreq;

    if (val < otherVal) minFreq = val;
    if (otherVal <= val) minFreq = otherVal;

    if (objTwo.hasOwnProperty(key)) {
      let counter = 0;
      while (counter < minFreq) {
        intersectingNums.push(+key);
        counter++;
      }
    }
  }

  return intersectingNums;
}
