/*

Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process:
Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy numbers.

Example:

Input: 19
Output: true

Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1

*/

// My solution;
// Two situations could occur: Either we end up with 1, or we go into an infinite loop;
// If we go into an infinite loop, then by definition we'll encounter a sum we've already encountered or calculated before;
// If we bump into a value we've previously come across, then that's a dead-end for us and we should return false;
// If the conditional in the while loop evaluates to a falsy value, then we know we've reduced the input to the target value of 1;
function isHappy(n) {
  let seen = {};

  while (n !== 1) {
    n = sumOfDigitSquares(n);
    if (seen[n] === true) {
      return false;
    }
    else {
      seen[n] = true;
    }
  }

  return true;
}

function sumOfDigitSquares(num) {
  return num.toString().split("").map(digit => digit ** 2).reduce((curr, acc) => curr + acc);
};
