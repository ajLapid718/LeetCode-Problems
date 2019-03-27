/*

Determine whether an integer is a palindrome.
An integer is a palindrome when it reads the same backward as forward.

Example 1:

Input: 121
Output: true

Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

Follow up:

Coud you solve it without converting the integer to a string?

*/

function isPalindrome(num) {
  if (num < 0) return false;

  let digits = [];
  let target = num;

  while (target) {
    let lastDigitOfTarget = target % 10;
    digits.push(lastDigitOfTarget);
    target = Math.floor(target / 10);
  }

  let leftIdx = 0;
  let rightIdx = digits.length - 1;

  while (leftIdx < rightIdx) {
    let leftSideNum = digits[leftIdx];
    let rightSideNum = digits[rightIdx];

    if (leftSideNum !== rightSideNum) return false;

    leftIdx++;
    rightIdx--;
  }

  return true;
}
