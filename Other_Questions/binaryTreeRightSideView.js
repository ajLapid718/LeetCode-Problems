/*

Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

Example:

Input: [1,2,3,null,5,null,4]
Output: [1, 3, 4]
Explanation:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---

*/

// traverse the left side of the tree FIRST;
// populate an array of values with values from the nodes such that each index represents a value [the
// right-most one] from that level;

// OR: use bfs/level-order traversal and grab the right-most node per level;

function rightSideView(root) {
  if (!root) return [];
  
  let values = [];
  
  function helper(node, level) {
    if (node.left) helper(node.left, level + 1);
    if (node.right) helper(node.right, level + 1);
    values[level] = node.val;
  }
  
  helper(root, 0);
  return values;
};

// Implement a BFS/level-order traversal;
// Grab the right-most node [its value] from that level to append to the output array;

function rightSideView(root) {
  if (!root) return [];
  
  let values = [];
  let queue = [root];
  
  while (queue.length) {
    let nodesOnLevel = queue.length;
    
    for (let i = 0; i < nodesOnLevel; i++) {
      let currentNode = queue.shift();
      if (i === 0) values.push(currentNode.val);
      if (currentNode.right) queue.push(currentNode.right);
      if (currentNode.left) queue.push(currentNode.left);
    }
  }
  
  return values;
}