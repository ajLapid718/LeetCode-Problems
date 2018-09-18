/*

Given a binary search tree (BST) with duplicates, find all the mode(s) (the most frequently occurred element) in the given BST.

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than or equal to the node's key.
The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
Both the left and right subtrees must also be binary search trees.


For example:

Given BST [1,null,2,2],

   1
    \
     2
    /
   2

return [2].

Note: If a tree has more than one mode, you can return them in any order.

Follow up: Could you do that without using any extra space? (Assume that the implicit stack space incurred due to recursion does not count).

*/

// My solution;
// Time Complexity: O(n);
// Space Complexity: O(n);
function findMode(root) {
  let modes = [];
  let obj = {};
  let freqs = getFreqs(root, obj);
  let maxFreq = Math.max.apply(null, Object.values(obj));
  for (let key in obj) {
    let val = obj[key];
    if (val === maxFreq) modes.push(Number(key));
  }
  return modes;
}

function getFreqs(node, seen = {}) {
  let currNode = node;
  if (!currNode) return [];
  seen[currNode.val] = seen[currNode.val] + 1 || 1;
  if (currNode.left) getFreqs(currNode.left, seen);
  if (currNode.right) getFreqs(currNode.right, seen);
  return seen;
}

// Another solution provided by LeetCode, slightly refactored by me;
// Time Complexity: O(n);
// Space Complexity: O(n);
function findMode(root) {
  if (!root) return [];

  let hash = {};
  let count = 0;

  const modes = [];
  const queue = [root];

  while (queue.length) {
    let node = queue.pop();
    hash[node.val] = hash[node.val] + 1 || 1;
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  for (let key in hash) {
    let val = hash[key];
    if (val > count) count = val;
  }

  for (let key in hash) {
    let val = hash[key];
    if (val === count) modes.push(Number(key));
  }

  return modes;
}
