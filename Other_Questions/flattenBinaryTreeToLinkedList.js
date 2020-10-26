/*

Given a binary tree, flatten it to a linked list in-place.

For example, given the following tree:

    1
   / \
  2   5
 / \   \
3   4   6
The flattened tree should look like:

1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6
          
Accepted
382,372
Submissions
757,904

*/

/*

Initial thoughts: At first glance, a pre-order DFS traversal (root, left, right) would lead to a flattened, single-sided tree aka linked-list for the purposes of this problem;

Let's step through a simpler example:

    1
   / \
  2   5
  
  should yield
  
    1
     \
      2
       \
        5

What's happening here?

- The root node (1) becomes the single-parent of the left node (2);
- The left node (2) becomes the single-parent of the right node (5);

Another way to look at it is:

- All nodes in the final list will have no left child;
- All nodes in the final list will only have a right child;
- We must traverse the right side first, followed by the left side, then finishing off with the root node;
- We should keep a variable to house the "previously visited" node; --- this instantiates as null;
- Take the current node, and assign its "right" property to the previously visited node;
- Take the current node, and set its "left" property to null;
- Make sure, before this call completes, the "previously visited node" is re-assigned to point to the current node;

*/

function flatten(root) {
  if (!root) return;
  
  let prev = null;
  
  function traverse(node) {
    if (node.right) traverse(node.right);
    if (node.left) traverse(node.left);
    node.right = prev;
    if (node.left) node.left = null;
    prev = node;
  }
  
  traverse(root);
}