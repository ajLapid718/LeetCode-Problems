/*

Find the sum of all left leaves in a given binary tree.

Example:

    3
   / \
  9  20
    /  \
   15   7

There are two left leaves in the binary tree, with values 9 and 15 respectively.
Return 24.

*/

// My solution;
// This is a level-order traversal of the binary tree;
function sumOfLeftLeaves(root) {
  let sum = 0;
  let queue = [root];

  while (queue.length) {
    let currNode = queue.shift();
    if (!currNode) continue;

    if (currNode.left) {
      if (isLeafNode(currNode.left) === true) sum += currNode.left.val;
      queue.push(currNode.left);
    }
    if (currNode.right) {
      queue.push(currNode.right);
    }
  }

  return sum;
};

function isLeafNode(node) {
  return !node.left && !node.right;
};

// A top solution provided by LeetCode;
// The nodes we are targeting have two qualities: they are leaves, and they have a parent to the immediate top-right of them;
// What do we know to be true?
// When we traverse the root, we know the it has no right parent or any parents at all for that matter;
// When we traverse the left side of the tree, we need to make sure there is a right parent for the leaf node at hand;
// When we traverse the right side of the tree, we need to specify that we aren't interested in leaf nodes on the right side with a left parent;
// Through each recursive call, we'll be building up a sum based on valid leaf node values in conjunction with 0s from invalid leaf node values;
function sumOfLeftLeaves(root) {
  return traverse(root, false);
};

function traverse(node, hasRightParent) {
  if (!node) return 0;

  let leafNode = isLeafNode(node);

  if (leafNode) {
    if (hasRightParent) {
      return node.val;
    }
    else {
      return 0;
    }
  }

  return traverse(node.left, true) + traverse(node.right, false);
};

function isLeafNode(node) {
  return !node.left && !node.right;
};
