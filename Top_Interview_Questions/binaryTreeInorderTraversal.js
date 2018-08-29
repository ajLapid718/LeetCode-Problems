/*

Given a binary tree, return the inorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,3,2]

*/

// My solution (recursively);
function inorderTraversal(root) {
  if (!root) return [];
  let arr = [];
  traverse(root, arr);
  return arr;
}

function traverse(node, values) {
  if (node.left) traverse(node.left, values);
  values.push(node.val);
  if (node.right) traverse(node.right, values);
}

// Another solution provided by LeetCode (iteratively);
function inorderTraversal(root) {
  let result = [];
  let stack = [];

  while (true) {
    if (root) {
      stack.push(root);
      root = root.left;
    }
    else {
      if (stack.length === 0) break;
      root = stack.pop();
      result.push(root.val);
      root = root.right;
    }
  }

  return result;
}
