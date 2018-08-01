/*

Given a non-empty, singly linked list with head node head, return a middle node of linked list.

If there are two middle nodes, return the second middle node.

Example 1:

Input: [1,2,3,4,5]
Output: Node 3 from this list (Serialization: [3,4,5])

The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
Note that we returned a ListNode object ans, such that:
ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.
Example 2:

Input: [1,2,3,4,5,6]
Output: Node 4 from this list (Serialization: [4,5,6])

Since the list has two middle nodes with values 3 and 4, we return the second one.

Note:

The number of nodes in the given list will be between 1 and 100.

*/

// My solution, which takes 50ms to run;
function middleNode(head) {
  let len = 0;
  let currNode = head;

  while (currNode) {
    len++;
    currNode = currNode.next;
  }

  let midPoint = Math.floor(len/2);
  let idx = 0;
  currNode = head;

  while (true) {
    if (idx === midPoint) return currNode;
    idx++;
    currNode = currNode.next;
  }
}

// The top solution provided by LeetCode, which uses a slow pointer and a fast pointer to determine the midpoint; This takes 48ms to run;
function middleNode(head) {
  let fast = head;
  let slow = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
}
