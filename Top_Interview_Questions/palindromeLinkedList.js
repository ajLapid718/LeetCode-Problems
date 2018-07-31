/*

Given a singly linked list, determine if it is a palindrome.

Example 1:

Input: 1 -> 2
Output: false

Example 2:

Input: 1->2->2->1
Output: true

Follow up:
Could you do it in O(n) time and O(1) space?

*/

// My solution, which takes 1600ms to run;
function isPalindrome(head) {
  let currNode = head;
  let len = 0;
  let pos = 1;

  while (currNode) {
    len++;
    currNode = currNode.next;
  }

  currNode = head;
  let midPoint = Math.floor(len/2);

  while (pos <= midPoint) {
    let currVal = currNode.val;
    let otherVal = grabNodeFromOtherSide(len, pos, head);
    if (currVal !== otherVal) return false;
    currNode = currNode.next;
    pos++;
  }

  return true;
}

function grabNodeFromOtherSide(len, pos, node) {
  let amountOfNexts = len - pos;
  let counter = 0;
  let currNode = node;

  while (counter < amountOfNexts) {
    currNode = currNode.next;
    counter++;
  }

  return currNode.val;
}

// The top solution provided by LeetCode, which takes 60ms to run;
function isPalindrome(head) {
  if (!head) return true;

  let currNode = head;
  let prevNode = null;

  while (currNode) {
    currNode.prev = prevNode;
    prevNode = currNode;
    currNode = currNode.next;
  }

  let left = head;
  let right = prevNode;

  while (left.next && right.prev) {
    if (left.val !== right.val) return false;
    left = left.next;
    right = right.prev;
  }

  return true;
}
