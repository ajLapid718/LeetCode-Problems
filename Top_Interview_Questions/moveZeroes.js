/*

Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.

*/

// Initially;
function moveZeroes(nums) {
  let vacantSpot = 0;

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (num !== 0) {
      nums[vacantSpot] = num;
      vacantSpot++;
    }
  }

  while (vacantSpot < nums.length) {
    nums[vacantSpot] = 0;
    vacantSpot++;
  }
}

// Alternatively;
function moveZeroes(nums) {
  let vacantSpot = 0;

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (num !== 0) {
      swap(nums, vacantSpot, i);
      vacantSpot++;
    }
  }
}

function swap(arr, idxOne, idxTwo) {
  let temp = arr[idxOne];
  arr[idxOne] = arr[idxTwo];
  arr[idxTwo] = temp;
}
