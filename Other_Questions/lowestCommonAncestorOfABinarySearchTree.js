/*

Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

Given binary search tree:  root = [6,2,8,0,4,7,9,null,null,3,5]

Example 1:

Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6

Explanation: The LCA of nodes 2 and 8 is 6.

Example 2:

Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
Output: 2

Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.

Note:

All of the nodes' values will be unique.
p and q are different and both values will exist in the BST.

*/

// Let's consider a BST where 2 is the root node, 1 is to the left of that root node, and 3 is on the right of that root node;

/*

            2
         1     3

*/

// The LCA of nodes 2 and 1 is 2;
// The LCA of nodes 1 and 3 is 2;
// The LCA of nodes 2 and 3 is 2;

// VICTORY CONDITIONS;
// p < LCA < q; [as long as LCA is...];
// q < LCA < p; [...between p and q];
// root === p || root === q;

function lowestCommonAncestor(root, p, q) {
  let lca = null;

  function helper(root, p, q) {
    if (!root) return null;

    if (root.val === p.val || root.val === q.val) {
        lca = root;
        return;
    }

    if (p.val < root.val && root.val < q.val || q.val < root.val && root.val < p.val) {
        lca = root;
        return;
    }

    helper(root.left, p, q);
    helper(root.right, p, q);
  }

  helper(root, p, q);
  return lca;
}
