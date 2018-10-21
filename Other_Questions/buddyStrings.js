/*

Given two strings A and B of lowercase letters, return true if and only if we can swap two letters in A so that the result equals B.

Example 1:

Input: A = "ab", B = "ba"
Output: true

Example 2:

Input: A = "ab", B = "ab"
Output: false

Example 3:

Input: A = "aa", B = "aa"
Output: true

Example 4:

Input: A = "aaaaaaabc", B = "aaaaaaacb"
Output: true

Example 5:

Input: A = "", B = "aa"
Output: false


Note:

0 <= A.length <= 20000
0 <= B.length <= 20000
A and B consist only of lowercase letters.

*/

function buddyStrings(A, B) {
  if (!A.length || !B.length) return false;
  if (A.length !== B.length) return false;
  if (A === B) return A.length > new Set(A).size;

  let indices = [];

  for (let i = 0; i < A.length; i++) {
    let currLetter = A[i];
    let otherLetter = B[i];
    if (currLetter !== otherLetter) indices.push(i);
  }

  if (indices.length === 2) {
    let charsOfA = A.split('');
    charsOfA[indices[0]] = A[indices[1]];
    charsOfA[indices[1]] = A[indices[0]];
    return charsOfA.join('') === B;
  }
  else {
    return false;
  }
}
