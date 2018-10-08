/*

Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7

return its zigzag level order traversal as:

[
  [3],
  [20,9],
  [15,7]
]

*/

function zigzagLevelOrder(root) {
  if (!root) return [];

  let levels = [];
  let queue = [root];
  let counter = 0;

  while (queue.length) {
    let level = [];
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let currNode = queue.shift();
      level.push(currNode.val);
      if (currNode.left) queue.push(currNode.left);
      if (currNode.right) queue.push(currNode.right);
    }

    if (counter % 2 === 0) {
      levels.push(level);
    }
    else {
      levels.push(level.reverse());
    }

    counter++;
  }

  return levels;
}
