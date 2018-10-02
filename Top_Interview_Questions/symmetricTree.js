/*

Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3

But the following [1,2,2,null,3,null,3] is not:

    1
   / \
  2   2
   \   \
   3    3

*/

// My solution;
function isSymmetric(root) {
  if (!root) return true;

  let queue = [root];

  while (queue.length) {
    let leftSide = [];
    let rightSide = [];
    let amountOfNodesInLevel = queue.length;

    for (let i = 0; i < amountOfNodesInLevel; i++) {
      let currNode = queue.shift();

      if (currNode.left === null) {
        leftSide.push(currNode.left);
      }

      if (currNode.right === null) {
        rightSide.push(currNode.right);
      }

      if (currNode.left) {
        leftSide.push(currNode.left.val);
        queue.push(currNode.left);
      }

      if (currNode.right) {
        rightSide.push(currNode.right.val);
        queue.push(currNode.right);
      }
    }

    if (isReflection(leftSide, rightSide) === false) return false;
  }

  return true;
};

function isReflection(arrOne, arrTwo) {
  return arrOne.toString() === arrTwo.reverse().toString();
};

// Another solution provided by LeetCode;
function isSymmeric(root) {
  if (!root) return true;

  function mirror(a, b) {
    if(!a && !b) return true;
    if(!a || !b || a.val !== b.val) return false;
    return mirror(a.left, b.right) && mirror(a.right, b.left);
  };

  return mirror(root.left, root.right);
};

// Another solution provided by LeetCode;
function isSymmetric(root) {
  return isMirror(root, root);
};

function isMirror(p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  return (p.val === q.val) && isMirror(p.right, q.left) && isMirror(p.left, q.right);
};

// Another soluton provided by LeetCode;
function isSymmetric(root) {
  if (!root || (!root.left && !root.right)) return true;
  if ((!root.left && root.right) || (!root.right && root.left)) return false;

  let left = [root.left];
  let right = [root.right];

  while (left.length > 0 && right.length > 0) {
    let leftNode = left.shift();
    let rightNode = right.shift();

    if (leftNode === null || rightNode === null) {
      if (leftNode !== rightNode) return false;
    }
    else {
      if (leftNode.val !== rightNode.val) return false;
    }

    if (leftNode) {
      left.push(leftNode.left);
      left.push(leftNode.right);
    }

    if (rightNode) {
      right.push(rightNode.right);
      right.push(rightNode.left);
    }
  }

  if (left.length > 0 || right.length > 0) return false;
  return true;
};
