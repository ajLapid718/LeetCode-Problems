/*

Given a binary tree, return the postorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [3,2,1]

*/

// My solution (recursively);
function postorderTraversal(root) {
  if (!root) return [];
  let arr = [];
  traverse(root, arr);
  return arr;
}

function traverse(node, values) {
  if (node.left) traverse(node.left, values);
  if (node.right) traverse(node.right, values);
  values.push(node.val);
}

// A solution provided by LeetCode (iteratively);
function postorderTraversal(root) {
  let stack = root ? [root] : [];
  let visited = [];
  let toReturn = []

  while (stack.length) {
    let node = stack.pop();

    if (visited.includes(node)) {
      toReturn.push(node.val);
    }
    else {
      visited.push(node);
      stack.push(node);
      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left)
    }
  }

  return toReturn;
}

// Another solution provided by LeetCode (iteratively);
function postorderTraversal(root) {
  if (!root) return [];

  let result = [];
  let temp = [root];

  while (temp.length) {
    let a = temp.pop();
    result.push(a.val);
    if (a.left) temp.push(a.left);
    if (a.right) temp.push(a.right);
  }

  return result.reverse();
}
