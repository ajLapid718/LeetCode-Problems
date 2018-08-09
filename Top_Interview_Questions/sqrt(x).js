/*

Implement int sqrt(int x).

Compute and return the square root of x, where x is guaranteed to be a non-negative integer.

Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

Example 1:

Input: 4
Output: 2

Example 2:

Input: 8
Output: 2

Explanation: The square root of 8 is 2.82842..., and since
             the decimal part is truncated, 2 is returned.

*/

function mySqrt(x) {
  let lowerBound = 0;
  let upperBound = x;
  let possibleRoot = (lowerBound + upperBound) / 2;

  while (lowerBound <= upperBound) {
    let possibleAnswer = Math.floor(possibleRoot * possibleRoot);
    if (possibleAnswer === x) return Math.floor(possibleRoot);
    if (possibleAnswer < x) lowerBound = possibleRoot + 1;
    if (possibleAnswer > x) upperBound = possibleRoot - 1;
    possibleRoot = (lowerBound + upperBound) / 2;
  }
}
