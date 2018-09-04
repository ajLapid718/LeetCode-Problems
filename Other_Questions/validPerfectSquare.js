/*

Given a positive integer num, write a function which returns True if num is a perfect square else False.

Note: Do not use any built-in library function such as sqrt.

Example 1:

Input: 16
Output: true

Example 2:

Input: 14
Output: false

*/

function isPerfectSquare(num) {
  for (let i = 0; i <= Math.round(num/2); i++) {
    if (i**2 === num) return true;
    if (i**2 > num) return false;
  }
}
