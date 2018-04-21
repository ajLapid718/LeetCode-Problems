/*

Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.
Please note that your returned answers (both index1 and index2) are not zero-based.

You may assume that each input would have exactly one solution and you may not use the same element twice.

Input: numbers = {2, 7, 11, 15}, target = 9;
Output: index1 = 1, index2 = 2;

*/

function twoSum(numbers, target) {
  let leftIdx = 0;
  let rightIdx = numbers.length - 1;

  while (leftIdx < rightIdx) {
    let sum = numbers[leftIdx] + numbers[rightIdx];

    if (sum === target) {
      return [leftIdx + 1, rightIdx + 1];
    }

    if (sum > target) {
      rightIdx--;
    }

    if (sum < target) {
      leftIdx++;
    }
  }
};
