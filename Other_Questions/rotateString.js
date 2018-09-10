/*

We are given two strings, A and B.

A shift on A consists of taking string A and moving the leftmost character to the rightmost position.
For example, if A = 'abcde', then it will be 'bcdea' after one shift on A.
Return True if and only if A can become B after some number of shifts on A.

Example 1:

Input: A = 'abcde', B = 'cdeab'
Output: true

Example 2:

Input: A = 'abcde', B = 'abced'
Output: false

Note:
A and B will have length at most 100.

*/

// My solution;
function rotateString(a, b) {
  if (a.length === 0 && b.length === 0) return true;
  if (a.length !== b.length) return false;

  let lettersA = a.split("");
  let counter = 0;

  while (true) {
    if (counter === lettersA.length) return false;
    if (lettersA[0] === b[0] && lettersA[lettersA.length - 1] === b[b.length - 1]) break;

    let shiftedChar = lettersA.shift();
    lettersA.push(shiftedChar);

    counter++;
  }

  for (let i = 0; i < lettersA.length; i++) {
    let letter = lettersA[i];
    if (letter !== b[i]) return false;
  }

  return true;
}

// Another solution provided by LeetCode;
function rotateString(a, b) {
  if (a.length === b.length) {
    let concat = a + a;
    return concat.search(B) >= 0;
  }
  else {
    return false;
  }
}

// Another solution calls for implementing the Knuth-Morris-Pratt string-searching algorithm;
