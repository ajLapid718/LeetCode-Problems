/*

Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]

*/

function subsets(nums) {
  let powerSet = [];
  
  function formSubsets(arr, memo = []) {
    for (let i = 0; i < arr.length; i++) {
      let currentElement = arr[i];
      let currentSubset = memo.concat(currentElement);
      powerSet.push(currentSubset);
      let remainingElements = arr.slice(i + 1);
      formSubsets(remainingElements, currentSubset);
    }
  }
  
  formSubsets(nums);
  powerSet.push([]);
  return powerSet;
}