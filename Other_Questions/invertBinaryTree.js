/*

Invert a binary tree.

Example:

Input:

     4
   /   \
  2     7
 / \   / \
1   3 6   9

Output:

     4
   /   \
  7     2
 / \   / \
9   6 3   1

*/

// My solution, which is recursive;
function invertTree(root) {
  if (!root) return null;

  let leftNode = root.left;
  let rightNode = root.right;

  root.left = rightNode;
  root.right = leftNode;

  invertTree(root.left);
  invertTree(root.right);

  return root;
}

// The top solution provided by LeetCode, which is iterative;
function invertTree(root) {
  if (!root) return null;

  const queue = [root];

  while (queue.length) {
    let node = queue.shift();

    let temp = node.left;
    node.left = node.right;
    node.right = temp;

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return root;
}
