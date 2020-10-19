/*

Given a binary tree, return the sum of values of its deepest leaves.
 
Example 1:

Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
Output: 15

Constraints:

The number of nodes in the tree is between 1 and 10^4.
The value of nodes is between 1 and 100.

*/

// get the maximum level of the tree;
// if the currentNode is a leafNode and the current level is equivalent to the maximum  level, then
// return that;

function deepestLeavesSum(root) {
  if (!root) return;
  let maximumLevel = getAmountOfLevels(root);
  return helper(root, 1, maximumLevel);
}

function getAmountOfLevels(root) {
  if (!root) return 0;
  return Math.max(getAmountOfLevels(root.left) + 1, getAmountOfLevels(root.right) + 1);
}

function isLeafNode(node) {
  return !node.left && !node.right;
}

function helper(node, currentLevel, maximumLevel) {
  if (!node) return 0;
  
  let sum = 0;
  
  if (isLeafNode(node) && currentLevel === maximumLevel) {
    sum += node.val;
  }

  return sum + helper(node.left, currentLevel + 1, maximumLevel) + helper(node.right, currentLevel + 1, maximumLevel);
    
}