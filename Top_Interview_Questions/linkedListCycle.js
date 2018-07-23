/*

Given a linked list, determine if it has a cycle in it.

Follow up:
Can you solve it without using extra space?

*/

// Initially;
function hasCycle(head) {
  if (!head) return false;

  let currNode = head;

  while (currNode) {
    if (currNode.flag) {
      return true;
    }
    else {
      currNode.flag = true;
    }
    currNode = currNode.next;
  }

  return false;
}

// Alternatively (More Optimal and Non-Mutative Approach);
function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }

  return false;
}
