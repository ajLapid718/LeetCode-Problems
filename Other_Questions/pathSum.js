/*

Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

Note: A leaf is a node with no children.

Example:

Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1

return true, as there exist a root-to-leaf path 5 -> 4 -> 11 -> 2 which sum is 22.

*/

function hasPathSum(root, targetSum) {
  let flag = false;

  function checkPathSum(root, targetSum, currSum = 0) {
    if (!root) return;

    currSum += root.val;

    if (isLeafNode(root)) {
      if (currSum === targetSum) flag = true;
    }
    else {
      if (root.left) checkPathSum(root.left, targetSum, currSum);
      if (root.right) checkPathSum(root.right, targetSum, currSum);
    }
  }

  checkPathSum(root, targetSum);
  return flag;
}

function isLeafNode(node) {
  return !node.left && !node.right;
}
