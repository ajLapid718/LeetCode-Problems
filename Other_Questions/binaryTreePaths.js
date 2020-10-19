/*

Given a binary tree, return all root-to-leaf paths.

Note: A leaf is a node with no children.

Example:

Input:

   1
 /   \
2     3
 \
  5

Output: ["1->2->5", "1->3"]

Explanation: All root-to-leaf paths are: 1->2->5, 1->3

*/

// Implement a DFS traversal of the binary tree;
// The initial call and downstream calls should pass/receive the built up path up to that point and then append the current node's value + the "->" symbol to that path;
// The base case should yield just the leaf node's stringified value, and then push that entire "path"
// into the output array;

function binaryTreePaths(root) {
  if (!root) return [];
  
  let values = [];
  
  function helper(node, path) {    
    if (isLeafNode(node)) {
      path += node.val.toString();
      values.push(path);
      return;
    }
    
    path += node.val.toString() + "->"
    
    if (node.left) helper(node.left, path);
    if (node.right) helper(node.right, path);
  }
  
  helper(root, "");
  return values;
}

function isLeafNode(node) {
  return !node.left && !node.right;
}