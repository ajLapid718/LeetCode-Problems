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

// My improved solution;

/*

We shouldn't mutate the linked list(s), so we can't append/drop a flag at each node to determine if we have already visited any particular node;

We should try out best to maintain a time complexity of O(n) and a space complexity of O(1);

Initial plan:

- Traverse headA;
- Keep a count of the amount of nodes;

- Traverse headB;
- Keep a count of the amount of nodes;

If both linked lists have the same amount of nodes, then we can begin with either;

However, if both linked lists have a different amount of nodes, then we should take the difference (diff) in amount of nodes and use that difference to move the longer linked list forward;

We can't have an intersection that happens behind the shorter linked list;

Once we have one pointer on each respective linked list starting across from each other, then we can move both pointers forward at a rate of 1 node per iteration;

If both nodes point to null, then we can return null --- there is no intersection;

If, however, both nodes point to the same node, then we can return that node --- there is an intersection;

*/

function getIntersectionNode(headA, headB) {
  let sizeOfA = 0;
  let sizeOfB = 0;
  
  let currNode = headA;
  
  while (currNode) {
    sizeOfA++;
    currNode = currNode.next;
  }
  
  currNode = headB;
  
  while (currNode) {
    sizeOfB++;
    currNode = currNode.next;
  }
  
  let diff = Math.abs(sizeOfA - sizeOfB);
  let otherPointer;
  
  if (sizeOfA >= sizeOfB) {
    currNode = headA;
    
    while (diff) {
      currNode = currNode.next;
      diff--;
    }
    
    otherPointer = headB;
  }
  else {
    currNode = headB;
    
    while (diff) {
      currNode = currNode.next;
      diff--;
    }
    
    otherPointer = headA;
  }
  
  while (currNode && otherPointer) {
    if (currNode === otherPointer) return currNode;
    currNode = currNode.next;
    otherPointer = otherPointer.next;
  }
  
  return null;
}