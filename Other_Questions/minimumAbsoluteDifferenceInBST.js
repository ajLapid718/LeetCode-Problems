/*

Given a binary search tree with non-negative values, find the minimum absolute difference between values of any two nodes.

Example:

Input:

   1
    \
     3
    /
   2

Output:
1

Explanation:
The minimum absolute difference is 1, which is the difference between 2 and 1 (or between 2 and 3).


Note: There are at least two nodes in this BST.

*/

function getMinimumDifference(root) {
  let minDiff = Infinity;
  let prev = null;

  function helper(curr) {
    if (curr.left) helper(curr.left);
    console.log(curr.val);
    if (curr.right) helper(curr.right);
  }

  helper(root);
  return minDiff;
}
