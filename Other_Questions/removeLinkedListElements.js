/*

Remove all elements from a linked list of integers that have value val.

Example:

Input:  1->2->6->3->4->5->6, val = 6
Output: 1->2->3->4->5

*/

// My solution;
// If a falsy value is passed in as a LL, return that falsy value;
// While we have a head node and while the data on the node matches the target value, keep sliding through the LL;
// This allows us to ignore any matching values at the front of the list, thereby allowing us to start with a non-matching value;
// If the head is a falsy value at this point, then all of the values were matching, which means we slid over to the tail-end null;
// If this is the case, then we simply have to return null as prompted;
// Otherwise, we traverse the remainder of the LL and drop the next node if its data matches the target value;

function removeElements(head, val) {
  if (!head) return head;

  while (head && head.val === val) {
    head = head.next;
  }

  if (!head) return null;

  let prev = head;

  while (prev.next !== null) {
    if (prev.next.val === val) {
      prev.next = prev.next.next;
    } else {
      prev = prev.next;
    }
  }

  return head;
}
