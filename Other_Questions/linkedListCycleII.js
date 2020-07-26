/*

Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.

Note: Do not modify the linked list.

 

Example 1:

Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.


Example 2:

Input: head = [1,2], pos = 0
Output: tail connects to node index 0
Explanation: There is a cycle in the linked list, where tail connects to the first node.


Example 3:

Input: head = [1], pos = -1
Output: no cycle
Explanation: There is no cycle in the linked list.


*/

/*

If there is no linked list OR if there is only one node in the linked list, return null to indicate that there is no cycle;

Establish a "slow" pointer and establish a "fast" pointer;

The "slow" pointer will move forward at a rate of one node iteration;
The "fast" pointer will move forward at a rate of two nodes per iteration;

If there is a cycle, then the "slow" pointer will meet with the "fast" pointer;

That particular node where this occurs will be the value assigned to the meetingPointNode variable;

If there is no cycle, then we have to terminate the loop and return null;

We can receive confirmation that there is no cycle if the "fast" pointer ever points to null;

Within the loop, we check if ```(!fast)``` because in a linked list with an even amount of nodes, the "fast" pointer will turn null;

We check if ```(!fast.next)``` because in a linked list with an odd amount of nodes, the "fast" pointer would error out if we tried to take the "next" value of "null" (we already know there is no cycle, so there is no need to move the "fast" pointer forward if the "next" value of "fast" is null);

If we do not have a meeting point node, then return null since there is no cycle;

IF, however, we have a meeting point node, then we need to establish a pointer (currNode) that points to the head of the linked list;

We then move the currNode forward and the pointer (within the cycle) that begins at the meetingPointNode forward one node per iteration;

When these two pointers meet (currNode and meetingPointNode), then we have landed on the node that begins the cycle and then we can return that target node as per the prompt;

The reason this works is because:
Let's establish:

X represents the amount of nodes before the start of the cycle;
Y represents the amount of nodes from the start of the cycle to the meeting point node;
Z represents the amount of remaining nodes in the cycle after the meeting point node;

To see what we're working toward "proving", it works to X being equal to Z, such that starting a pointer at the head of the linked list and starting a pointer at the meeting point node will eventually and naturally lead to both pointers pointing at the same node, which is the node that begins the cycle;

Here is why that is the case;

- The "fast" pointer moves at double the rate of the "slow" pointer --- this provides us with a
  consistent distance between both pointers;
- Arbitrarily, for more reference, if the "slow" pointer moved 5 nodes, then the "fast" pointer traveled 10 nodes;
- How many nodes would the "slow" pointer have to traverse to get to the meeting point node?;
- The "slow" pointer would have to traverse X + Y nodes to get to the meeting point node;
- Note: The "fast" pointer moves twice as fast as the "slow" pointer does;
- How many nodes would the "fast" pointer have to have traversed to get to the meeting point node?;
- The "fast" pointer would have to traverse (X + Y) nodes plus (X + Y) nodes;
- Note: In other words, if it took the "slow" pointer X + Y nodes to get to the meeting point node, then the "fast" pointer took 2(X + Y) nodes to reach that same position at that point in time;
- Keep this at the forefront of thought: the "fast" pointer traveled a whole (X + Y) amount of nodes from the meeting point node in order to revist the meeting point node while the "slow" pointer was progressing to that meeting point in the first place;
- In other words, the remaining amount of nodes in the linked list (denoted by variable Z) is actually some multiple of (X + Y);
- Almost there;
- If we start from the meeting point node, then there is an offset from the start of the cycle, and that, in other words, means we are already starting off with a "headstart" of Y amount of nodes;
- So, what does this mean?;
- If it takes (X + Y) nodes to revisit the meeting point node, and we already have a starting point of the meeting point node which is Y amount of nodes, then we could say we have already traveled "Y" nodes (aka, we can subtract the Y from the X + Y that the "fast" pointer has to travel to complete the cycle);
- Now, we are at the point where it will take X amount of nodes to complete the cycle;
- Remember, while in the context of the cycle, as stated above, X amount of nodes is needed to complete the cycle, but in the context of the linked list, X is also the amount of nodes from the head to the node that begins the cycle;
- That means, X = Z, or X = (X + Y) - Y, or basically X (from head) = X (from meeting point);
- If we race a pointer from the head node, and a pointer from the meeting point node, at a uniform rate of 1 node per iteration, then the node in which they meet will be a reference to the node that begins the cycle of the linked list;

*/

function detectCycle(head) {
  if (!head || !head.next) {
    return null;
  }
  
  let slow = head;
  let fast = head;
  let meetingPointNode;
  
  while (true) {
    slow = slow.next;
    
    if (!fast || !fast.next) {
      break;  
    }
    
    fast = fast.next.next;
    
    if (slow === fast) {
      meetingPointNode = slow;
      break;
    }
  }
  
  if (!meetingPointNode) {
    return null;
  }
  
  let currNode = head;
  
  while (true) {
    if (currNode === meetingPointNode) return currNode;
    currNode = currNode.next;
    meetingPointNode = meetingPointNode.next;
  }
}