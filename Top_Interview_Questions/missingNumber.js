/*

Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

Example 1:

Input: [3,0,1]
Output: 2

Example 2:

Input: [9,6,4,2,3,5,7,0,1]
Output: 8

*/

function missingNumber(nums) {
  let min = Infinity;
  let max = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    let currNum = nums[i];
    if (currNum < min) min = currNum;
    if (currNum > max) max = currNum;
  }

  if (min !== 0) return 0;

  let incompleteSum = 0;

  for (let i = 0; i < nums.length; i++) {
    let currNum = nums[i];
    incompleteSum += currNum;
  }

  let completeSum = 0;

  while (min <= max) {
    completeSum += min;
    min++;
  }

  return completeSum - incompleteSum || nums.length;
}

/*

The instructions differed from the requirements of the test cases.
The test cases did not start at 0.
If the test cases matched the prompt, then a binary search solution could have been implemented.
In any case, the following test cases are more appropriate.

let inputOne = [3,0,1];
let inputTwo = [9,6,4,2,3,5,7,0,1];
let inputThree = [0];
let inputFour = [1];
let inputFive = [0,1];
let inputSix = [1,0];
let inputSeven = [1,2];

console.log(missingNumber(inputOne)); // 2;
console.log(missingNumber(inputTwo)); // 8;
console.log(missingNumber(inputThree)); // 1;
console.log(missingNumber(inputFour)); // 0;
console.log(missingNumber(inputFive)); // 2;
console.log(missingNumber(inputSix)); // 2;
console.log(missingNumber(inputSeven)); // 0;

*/
