/*


Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: 2
Example 2:

Input: root = [2,null,3,null,4,null,5,null,6]
Output: 5
 

Constraints:

The number of nodes in the tree is in the range [0, 104].
-1000 <= Node.val <= 1000

*/

function minDepth(root) {
  if (!root) return 0;
  
  let minimumDepth = Infinity;
  
  function helper(node, currentDepth) {    
    if (isLeafNode(node) && currentDepth < minimumDepth) {
      minimumDepth = currentDepth;
    }
    
    if (node.left) helper(node.left, currentDepth + 1);
    if (node.right) helper(node.right, currentDepth + 1);
  }
 
  helper(root, 1);
  return minimumDepth;
}
  
function isLeafNode(node) {
  return !node.left && !node.right;
}