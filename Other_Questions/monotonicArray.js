/*

An array is monotonic if it is either monotone increasing or monotone decreasing.

An array A is monotone increasing if for all i <= j, A[i] <= A[j].
An array A is monotone decreasing if for all i <= j, A[i] >= A[j].

Return true if and only if the given array A is monotonic.

Example 1:

Input: [1,2,2,3]
Output: true

Example 2:

Input: [6,5,4,4]
Output: true

Example 3:

Input: [1,3,2]
Output: false

Example 4:

Input: [1,2,4,5]
Output: true

Example 5:

Input: [1,1,1]
Output: true

Note:

A) 1 <= A.length <= 50000
B) -100000 <= A[i] <= 100000

*/

// Time Complexity: O(n);
// Space Complexity: O(1);
function isMonotonic(arr) {
  let idx = 0;
  while (arr[idx] === arr[idx+1]) idx++;
  let direction = findDir(arr[idx], arr[idx+1]);
  return checkIfMonotone(arr, direction);
}

function checkIfMonotone(arr, dir) {
  for (let i = 0; i < arr.length - 1; i++) {
    let curr = arr[i];
    let folo = arr[i+1];

    if (curr === folo) continue;
    if (dir === "ascending" && curr > folo) return false;
    if (dir === "descending" && curr < folo) return false;
  }

  return true;
}

function findDir(num1, num2) {
  if (num1 < num2) return "ascending";
  if (num1 > num2) return "descending";
}
