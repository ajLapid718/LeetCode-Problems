/*

Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

Return the linked list sorted as well.

Example 1:

Input: 1->2->3->3->4->4->5
Output: 1->2->5
Example 2:

Input: 1->1->1->2->3
Output: 2->3

*/

// Consider:
// A list of all distinct values;
// A list of all duplicate values;
// A list that begins with duplicates;
// A list that ends with duplicates;
// A list that has some varying combination of distinct values and duplicate values;

// The main idea: 
// PER ITERATION, IF THE CURRENT NODE'S VALUE IS EQUIVALENT TO THE FOLLOWING NODE'S VALUE, MOVE ALONG
// UNTIL WE ENCOUNTER EITHER THE END OF THE LIST OR A NODE WITH A DISTINCT VALUE;
// IN THE PROCESS OF THIS, IF WE ENCOUNTER A DISTINCT VALUE FOLLOWED BY ANOTHER DISTINCT VALUE, PROCEED
// FORWARD AND READJUST ANY POINTERS TO THE SUBSEQUENT NODES;

// In the event that we have a list of all distinct values, we should return the head as-is;
// In the event that we have all duplicate values, we should return null;
// In the event that we begin with duplicates, we cannot rely on the original head node and we need to...
// ...transform the first distinct node to be the renovated head node;
// In the event that we have a list that ends with duplicates, we need to be able to essentially skip...
// ...over them and point the very last distinct node to null to "wrap up" the list;
// In the event that we have some varying combination of distinct values and duplicate values, we need to...
//...be meticulous in readjusting pointers (see main idea);

function deleteDuplicates(head) {
  if (head === null || head.next === null) {
    return head;
  }
  
  let sentinel = new ListNode(-Infinity, head);
  let prev = sentinel;
  let curr = head;
  let scout = head.next;

  while (scout) {
    if (curr.val === scout.val) {
      while (scout && curr.val === scout.val) {
        scout = scout.next;
      }
      prev.next = scout;
      curr = scout;
      if (!scout) break;
      scout = scout.next;
    }
    else {
      prev = curr;
      curr = scout;
      scout = scout.next;
    }
  }

  return sentinel.next;
}