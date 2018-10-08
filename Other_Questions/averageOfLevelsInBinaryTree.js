/*

Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.

Example 1:

Input:
    3
   / \
  9  20
    /  \
   15   7

Output: [3, 14.5, 11]

Explanation:
The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11.
Hence return [3, 14.5, 11].

*/

function averageOfLevels(root) {
  let averages = [];
  let queue = [root];

  while (queue.length) {
    let temp = [];
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let currNode = queue.shift();
      temp.push(currNode.val);
      if (currNode.left) queue.push(currNode.left);
      if (currNode.right) queue.push(currNode.right);
    }

    averages.push(getAverage(temp));
  }

  return averages;
};

function getAverage(level) {
  return level.reduce((a,b) => a + b) / level.length;
};
