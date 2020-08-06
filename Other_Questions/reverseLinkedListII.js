// Pre-SubList ---> Reversed-SubList ---> Post-SubList;

// We need to point the Pre-SubList (head up to and including m - 1) to Reversed-SubList;
// We need to reverse what will become the Reversed-SubList (m up to and including n);
// NOTE: The originalHead (node m) of the subList will become the renovatedTail;
// NOTE: The originalTail (node n) of the subList will become the renovatedHead;
// The entire Post-SubList will be represented by (node n + 1);

// Consideration: We'll need to store some sort of "bridge" pointer (at node m - 1) in order to connect the end of the pre-sublist to the new beginning (renovatedHead) of the Reversed-SubList;
// Consideration: We'll need to store a reference to the eventual "renovatedTail" node (node m) in order to connect the renovatedTail to the entire Post-SubList (node n + 1);
// Consideration: If we have an empty linked list, we should return null;
// Consideration: If m and n are the same values, then return head as-is;

// MAJOR CONSIDERATION: IF WE HAVE TO REVERSE THE LINKED LIST FROM THE VERY BEGINNING (HEAD) WHERE M = 1, then our bridge pointer will point to null and give us an issue if we try to abide by the aforementioned logic and connect the bridge (null) to...any node;

// In the event that M = 1, or rather the bride pointer is "null" and not pointing to a node, just return the renovatedHead BUT make sure to connect to the postSubList prior to that step;

function reverseBetween(head, m, n) {
  if (head === null || m === n) {
    return head;
  }    
  
  let prev = null;
  let curr = head;
  
  for (let i = 1; i < m; i++) {
    prev = curr;
    curr = curr.next;
  }
  
  let bridge = prev;
  let renovatedTail = curr;
  
  for (let i = m; i <= n; i++) {
    let folo = curr.next;
    curr.next = prev;
    prev = curr;
    curr = folo;
  }
  
  let renovatedHead = prev;
  let postSubList = curr;
  
  if (m === 1) {
    renovatedTail.next = postSubList;
    return renovatedHead;
  }

  bridge.next = renovatedHead;
  renovatedTail.next = postSubList;

  return head;
}