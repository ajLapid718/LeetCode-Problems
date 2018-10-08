/*

Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7

return its bottom-up level order traversal as:

[
  [15,7],
  [9,20],
  [3]
]

*/

function levelOrderBottom(root) {
  if (!root) return [];

  let levels = [];
  let queue = [root];

  while (queue.length) {
    let level = [];
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let currNode = queue.shift();
      level.push(currNode.val);
      if (currNode.left) queue.push(currNode.left);
      if (currNode.right) queue.push(currNode.right);
    }

    levels.unshift(level);
  }

  return levels;
}
