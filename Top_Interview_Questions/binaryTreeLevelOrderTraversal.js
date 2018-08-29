/*

Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7

return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]

*/

// My Solution;
function levelOrder(root) {
  if (!root) return [];

  let values = [];
  let queue = [root];

  while (queue.length) {
    let currentLevel = [];
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let currNode = queue.shift();
      if (currNode.left) queue.push(currNode.left);
      if (currNode.right) queue.push(currNode.right);
      currentLevel.push(currNode.val);
    }

    values.push(currentLevel);
  }

  return values;
}

// The Top Solution Provided By LeetCode;
function levelOrder(root) {
  if (root === null) return [];
  let results = [];
  let queue = [root];

  let last = root;
  let nlast = root;
  let list = [];

  while (queue.length) {
    const node = queue.shift();

    list.push(node.val);

    if (node.left) {
      queue.push(node.left);
      nlast = node.left;
    }

    if (node.right) {
      queue.push(node.right);
      nlast = node.right;
    }

    if (node === last) {
      results.push(list);
      list = [];
      last = nlast;
    }
  }

  return results;
}
