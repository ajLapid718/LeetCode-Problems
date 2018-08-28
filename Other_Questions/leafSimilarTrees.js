/*

Consider all the leaves of a binary tree.
From left to right order, the values of those leaves form a leaf value sequence.

      3
   /    \
  5      1
 / \    / \
6   2  9   8
  / \
 7   4

For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

Two binary trees are considered leaf-similar if their leaf value sequence is the same.

Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

Note:

Both of the given trees will have between 1 and 100 nodes.

*/

function leafSimilar(root1, root2) {
  return JSON.stringify(gatherLeafSequence(root1)) === JSON.stringify(gatherLeafSequence(root2));
}

function gatherLeafSequence(root) {
  let arr = [];
  let currNode = root;

  if (!currNode) return [];
  if (isLeafNode(currNode) === true) arr.push(currNode.val);

  return arr.concat(gatherLeafSequence(currNode.left)).concat(gatherLeafSequence(currNode.right));
}

function isLeafNode(node) {
  return !node.left && !node.right;
}
