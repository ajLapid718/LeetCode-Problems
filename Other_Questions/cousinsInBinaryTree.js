/*

In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.

Two nodes of a binary tree are cousins if they have the same depth, but have different parents.

We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.

Return true if and only if the nodes corresponding to the values x and y are cousins.

 

Example 1:


Input: root = [1,2,3,4], x = 4, y = 3
Output: false
Example 2:


Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
Output: true
Example 3:



Input: root = [1,2,3,null,4], x = 2, y = 3
Output: false
 

Constraints:

The number of nodes in the tree will be between 2 and 100.
Each node has a unique integer value from 1 to 100.

*/

function isCousins(root, x, y) {
  if (!root) return null;
  
  let parentOfX;
  let parentOfY;
  
  let levelOfX;
  let levelOfY;
  
  function helper(node, currentLevel) {
    if (!node) return null;
    
    if (hasTargetChild(node, x)) {
      parentOfX = node;
      levelOfX = currentLevel + 1;
    }

    if (hasTargetChild(node, y)) {
      parentOfY = node;
      levelOfY = currentLevel + 1;
    }
    
    if (parentOfX && parentOfY && levelOfX && levelOfY) return;

    if (node.left) helper(node.left, currentLevel + 1);
    if (node.right) helper(node.right, currentLevel + 1);
  }
  
  helper(root, 0);  
  return parentOfX !== parentOfY && levelOfX === levelOfY;
}

function hasTargetChild(node, targetVal) {
  return (node.left && node.left.val === targetVal) || (node.right && node.right.val === targetVal);
}