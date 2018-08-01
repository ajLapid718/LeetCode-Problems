/*

Merge two sorted linked lists and return it as a new list.
The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1 -> 2 -> 4, 1 -> 3 -> 4;
Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4;

*/

function mergeTwoLists(listOne, listTwo) {
  let head = new Node();
  let currNode = head;

  while (listOne && listTwo) {
    if (listOne.val <= listTwo.val) {
      currNode.next = listOne;
      listOne = listOne.next;
    } else {
      currNode.next = listTwo;
      listTwo = listTwo.next;
    }
    currNode = currNode.next;
  }

  if (listOne) currNode.next = listOne;
  if (listTwo) currNode.next = listTwo;

  return head.next;
}
