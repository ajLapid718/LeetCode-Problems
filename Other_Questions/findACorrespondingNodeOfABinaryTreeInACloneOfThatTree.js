/*

1379. Find a Corresponding Node of a Binary Tree in a Clone of That Tree
Medium

44

63

Add to List

Share
Given two binary trees original and cloned and given a reference to a node target in the original tree.

The cloned tree is a copy of the original tree.

Return a reference to the same node in the cloned tree.

Note that you are not allowed to change any of the two trees or the target node and the answer must be a reference to a node in the cloned tree.

Follow up: Solve the problem if repeated values on the tree are allowed.

 

Example 1:


Input: tree = [7,4,3,null,null,6,19], target = 3
Output: 3
Explanation: In all examples the original and cloned trees are shown. The target node is a green node from the original tree. The answer is the yellow node from the cloned tree.
Example 2:


Input: tree = [7], target =  7
Output: 7
Example 3:


Input: tree = [8,null,6,null,5,null,4,null,3,null,2,null,1], target = 4
Output: 4
Example 4:


Input: tree = [1,2,3,4,5,6,7,8,9,10], target = 5
Output: 5
Example 5:


Input: tree = [1,2,null,3], target = 2
Output: 2
 

Constraints:

The number of nodes in the tree is in the range [1, 10^4].
The values of the nodes of the tree are unique.
target node is a node from the original tree and is not null.
Accepted
5,237
Submissions
6,054

*/

/*

We are given the "original" tree;
We are given the "cloned" tree;
We are given the "target" node which consists of an integer value and is a reference to a node in the "original" tree;

- The values of the nodes of the tree are unique;
- The "target" node is a node from the "original" tree and it is not null;

One way to think about this problem is to think about tree traversals;

What comes to mind is:

1) Pre-Order Traversal (DFS);
2) In-Order Traversal (DFS);
3) Post-Order Traversal (DFS);

Another thing that comes to mind is:

1) Level-Order Traversal (BFS);

Intial Hypothesis: At worst case, we will need to travel through the entire "original" tree in order to locate the target node and then we will need to travel through the entire "cloned" tree in order to locate the "same exact node" in the "cloned" tree;

Those are some tools, and here is one approach that immediately comes to mind:

It is possible to maintain a counter while traversing the "original" tree;
In doing so, we can track the position we are currently at in the iteration;
This unique identifier will allow us to make sure we have a stopping point when traversing the "cloned" tree with the same type of traversal applied to the "original" tree;

One thing to test is: what happens if (since the nodes of the tree are unique) we ignore the "original" tree, and simply look for the target in "cloned"?;

*/

function getTargetCopy(original, cloned, target) {
  let captured;

  function helper(root) {
    if (!captured) {
      if (root.val === target.val) captured = root;
      if (root.left) helper(root.left);
      if (root.right) helper(root.right);
    }
  }

  helper(cloned);
  return captured;
}