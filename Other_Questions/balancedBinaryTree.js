/*

Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: true
Example 2:


Input: root = [1,2,2,3,3,null,null,4,4]
Output: false
Example 3:

Input: root = []
Output: true
 

Constraints:

The number of nodes in the tree is in the range [0, 5000].
-104 <= Node.val <= 104

*/

// A height-balanced binary tree is defined as: a binary tree in which the left and right subtrees of every node differ in height by no more than 1;

// Example 1: 
// The height of the left subtree is: 1;
// The height of the right subtree is: 2;
// TRUE;

// Example 2: 
// The height of the left subtree is: 3;
// The height of the right subtree is: 1;
// FALSE;

// If there is no tree, return TRUE;

// General goals: traverse the entire tree, compare the height of the left side and the right side for every subtree --- traveling as deep as possible, the "global" maximum should never surpass 1, the "global" maximum should be the baseline for comparisons against the [absolute] height difference between the two subtrees [at-hand, at that point in the process] --- in this way, if we stumble upon an absolute height difference, we can break out right then and there because the tree is imbalanced;

// Get the height of each side of the tree, and each subtree via recursion, and as a "byproduct" of that recursive function re-assign the "global" maxDiff variable to hold the value indicating imbalance(s), if any;

function isBalanced(root) {
  if (!root) return true;
  let maxDiff = -Infinity;
  
  function getHeight(node) {
    if (!node) return 0;
    if (maxDiff > 1) return;
    
    let leftTreeHeight = getHeight(node.left);
    let rightTreeHeight = getHeight(node.right);
    
    let diffInHeight = Math.abs(leftTreeHeight - rightTreeHeight);
    
    if (diffInHeight > 1) {
      maxDiff = diffInHeight;
      return;
    }
    
    return Math.max(leftTreeHeight, rightTreeHeight) + 1;
  }
    
  getHeight(root);
  return maxDiff <= 1;
}