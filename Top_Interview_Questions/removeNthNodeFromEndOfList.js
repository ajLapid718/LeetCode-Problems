/*

Given a linked list, remove the n-th node from the end of list and return its head.

Example:

Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:

Given n will always be valid.

Follow up:

Could you do this in one pass?

*/

/*

Eventually, we want to reach a position where we can do something along the lines of:

prev.next = curr.next;

Where "prev" is the very-node-behind-the-target-node-to-remove.
Where "curr" is the target-node-to-remove.

In this way, the action would be to take the "next" pointer of the previous node, point it to the node-ahead-of-the-target-node-to-remove, thereby "skipping" over the target-node-to-remove and effectively removing the n-th node from the very end of the list as prompted.

One way to approach this scenario is to establish two pointers, one that will be lagging behind and another that will be leading the way. 

Let's call the lagging one "slow" and let's call the leading one "fast".

It would benefit us to have the "slow" pointer begin at the very beginning of the linked list whereas the "fast" pointer will begin "n" nodes forward from the very beginning of the linked list.

Both will then advance by 1 node per iteration.

This creates a distance between the pointers such that when we terminate the loop because the "fast" pointer will point to null, the "slow" pointer will be at the-target-node-to-remove. We can then perform the action of reassignment as displayed above.

*/

function removeNthFromEnd(head, n) {
  let prev = new ListNode();
  prev.next = head;
  
  let slow = head;
  let fast = head;
  
  let steps = n;
  
  while (steps) {
    fast = fast.next;
    if (!fast) {
      return slow.next;
    }
    steps--;
  }

  while (fast) {
    prev = slow;
    slow = slow.next;
    fast = fast.next;
  }
  
  prev.next = slow.next;
  
  return head;
}