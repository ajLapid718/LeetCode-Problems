/*

Given the root node of a binary search tree (BST) and a value.
You need to find the node in the BST that the node's value equals the given value.
Return the subtree rooted with that node.
If such node doesn't exist, you should return NULL.

For example,

Given the tree:
        4
       / \
      2   7
     / \
    1   3

And the value to search: 2
You should return this subtree:

      2
     / \
    1   3

In the example above, if we want to search the value 5, since there is no node with value 5, we should return NULL.

Note that an empty tree is represented by NULL, therefore you would see the expected output (serialized tree format) as [], not null.

*/

// My solution, which is recursive;
function searchBST(root, val) {
  if (root.val === val) return root;
  if (val < root.val && root.left) return searchBST(root.left, val);
  if (val > root.val && root.right) return searchBST(root.right, val);
  return [];
}

// A solution provided by LeetCode, which is iterative;
function searchBST(root, val) {
  while (root && root.val !== val) {
    root = val > root.val ? root.right : root.left;
  }
  return root || [];
}
