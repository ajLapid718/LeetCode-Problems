/*

Write a program to find the node at which the intersection of two singly linked lists begins.

For example, the following two linked lists:

A:          a1 → a2
                   ↘
                     c1 → c2 → c3
                   ↗
B:     b1 → b2 → b3

begin to intersect at node c1.

Notes:

- If the two linked lists have no intersection at all, return null.
- The linked lists must retain their original structure after the function returns.
- You may assume there are no cycles anywhere in the entire linked structure.
- Your code should preferably run in O(n) time and use only O(1) memory.

*/

// My solution;
function getIntersectionNode(headA, headB) {
  let intersectingNode;

  let currNodeA = headA;

  while (currNodeA) {
    currNodeA.flag = true;
    currNodeA = currNodeA.next;
  }

  let currNodeB = headB;

  while (currNodeB) {
    if (currNodeB.flag === true && intersectingNode === undefined) {
      delete currNodeB.flag;
      intersectingNode = currNodeB;
    }
    else {
      delete currNodeB.flag;
      currNodeB = currNodeB.next;
    }
  }

  if (intersectingNode) {
    return intersectingNode;
  }
  else {
    return null;
  }
}

// Top solution provided by LeetCode;
function getIntersectionNode(headA, headB) {
  let currNodeOfA = headA;
  let currNodeOfB = headB;

  let reachedEndOfA = false;
  let reachedEndOfB = false;

  while (currNodeOfA && currNodeOfB && currNodeOfA !== currNodeOfB) {
    if (currNodeOfA.next === null && !reachedEndOfA) {
      currNodeOfA = headB;
      reachedEndOfA = true;
    }
    else {
      currNodeOfA = currNodeOfA.next;
    }

    if (currNodeOfB.next === null && !reachedEndOfB) {
      currNodeOfB = headA;
      reachedEndOfB = true;
    }
    else {
      currNodeOfB = currNodeOfB.next;
    }
  }

  if (currNodeOfA === null || currNodeOfB === null) {
    return null;
  }
  else {
    return currNodeOfA;
  }
}
