/*

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

Example 1:

Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.
Example 2:


Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
Output: 5
Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.
Example 3:

Input: root = [1,2], p = 1, q = 2
Output: 1
 

Constraints:

The number of nodes in the tree is in the range [2, 105].
-109 <= Node.val <= 109
All Node.val are unique.
p != q
p and q will exist in the tree.

*/

/*

1) If the root is given as a null value, then return null;

2) If the root is p OR if the root is q, then return the root since the lowest common ancestor will abide by the "descendant of itself" condition;

3) Traverse each side of the tree, and each side of every subtree;

4) p and q could be positioned in these ways:
  - p is on one side of the tree and q is on the other side of the tree (root is, therefore, the lowest common ancestor);
  - p and q are both on the left side of the tree (the first matching node on the left side will be the lowest common ancestor, leaving no need to explore below/beyond that node);
  - p and q are both on the right side of the tree (the first matching node on the right side will be the lowest common ancestor, leaving no need to explore below/beyond that node);

*/

function lowestCommonAncestor(root, p, q) {
  if (root === null) {
    return null;
  }
    
  if (p === root || q === root) {
    return root;
  }
  
  let leftSide = lowestCommonAncestor(root.left, p, q);
  let rightSide = lowestCommonAncestor(root.right, p, q);
    
  if (leftSide && rightSide) return root;
  if (leftSide === null && rightSide === null) return null;
  if (leftSide && rightSide === null) return leftSide;
  if (leftSide === null && rightSide) return rightSide;  
}