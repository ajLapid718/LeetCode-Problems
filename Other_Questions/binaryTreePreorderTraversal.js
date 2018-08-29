/*

Given a binary tree, return the preorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,2,3]

*/

// My solution (recursive);
function preorderTraversal(root) {
  if (!root) return [];
  let arr = [];
  traverse(root, arr);
  return arr;
}

function traverse(node, values = []) { // Initializing a default value of an empty array is unnecessary here;
  values.push(node.val);
  if (node.left) traverse(node.left, values);
  if (node.right) traverse(node.right, values);
}

// Another solution provided by LeetCode (iterative);
function preorderTraversal(root) {
  if (!root) return [];

  let result = [];
  let s = [root];

  while (s.length) {
    let current = s.pop();
    result.push(current.val);
    if (current.right) s.push(current.right);
    if (current.left) s.push(current.left);
  }

  return result;
}
