/*

We are given a linked list with head as the first node.  Let's number the nodes in the list: node_1, node_2, node_3, ... etc.

Each node may have a next larger value: for node_i, next_larger(node_i) is the node_j.val such that j > i, node_j.val > node_i.val, and j is the smallest possible choice.  If such a j does not exist, the next larger value is 0.

Return an array of integers answer, where answer[i] = next_larger(node_{i+1}).

Note that in the example inputs (not outputs) below, arrays such as [2,1,5] represent the serialization of a linked list with a head node value of 2, second node value of 1, and third node value of 5.

 

Example 1:

Input: [2,1,5]
Output: [5,5,0]
Example 2:

Input: [2,7,4,3,5]
Output: [7,0,5,5,0]
Example 3:

Input: [1,7,5,1,9,2,5,1]
Output: [7,9,9,9,0,5,0,0]
 

Note:

1 <= node.val <= 10^9 for each node in the linked list.
The given list has length in the range [0, 10000].

*/

/*

Let's say we are traversing a singly-linked list from left to right.

We need to find the "next greater node" in the singly-linked list.

More specifically, we need to find the value of the node that has the next greater value than the current node in the singly-linked list.

In other words, we need to find the very next, or closest, "peak" or "incline" that occurs down the line from the current node in the iteration.

Something to be mindful of is that we are trying to pinpoint the most immediately encountered "peak" or "incline" and this does not necessarily mean we are looking for the largest or biggest "peak" or "incline".

What is our "range of motion" when it comes to this type of problem?

We can iterate forward. 
We can iterate backward.
We can maintain a pointer or multiple pointers.

On paper, we can see how this target output array could be simulated.

We could traverse the linked list (more importantly, the values of each node) from right-to-left.

The last element will always, in accordance with the stipulations of the prompt, yield a zero (0) in the output array at that corresponding position because there will never be a "next greater value" if you are located at the very end of the list.

Remember, we are approaching this from right to left, east to west, back to front, so-to-speak.

Proceeding along in this direction, we can see that the "next greater value" will originate from a number we've already visited. This indicates that we should keep a history of these values.

We want to store the very first value we see, and then every subsequent value will be "on top of" that value, and so on and so forth. Therefore, the first value we see and store will be the last item we might have to use in some sort of comparison or evaluation. First-In, Last-Out --- as it pertains to the very first value we capture. Last-In, First-Out --- as it pertains to the very last value we capture. That's a stack.

Building off of this, we have to maintain a few different records:

1) The values of the singly-linked list we are traversing from right-to-left.
2) The stack we will instantiate in order to keep track of the greatest value we have seen so far relative to any given point in the singly-linked list.
3) The target output list that should reflect if there is a next greater value we have seen so far (keep processing the pop() method of the stack until we encounter a value in the stack that is greater than the current value in the iteration) or if there is not a next greater value we have seen so far (insert 0 into the target output array as per the prompt).

We can transform the singly-linked list to an array.
We can establish a stack.
We can draw the necessary comparisons.

*/

class Stack {
  constructor() {
    this.data = {};
    this.size = 0;
  }

  push(num) {
    this.data[this.size] = num;
    this.size++;
    return this.size;
  }

  pop() {
    let evictedNum = this.data[this.size - 1];
    delete this.data[this.size - 1];
    this.size--;
    return evictedNum;
  }

  top() {
    return this.data[this.size - 1];
  }

  isEmpty() {
    return this.size === 0;
  }
}

function toArray(head) {
  let arr = [];
  
  let currNode = head;

  while (currNode) {
    arr.push(currNode.val);
    currNode = currNode.next;
  }

  return arr;
}

function nextLargerNodes(head) {
  let outputList = [];
  
  let nodeValuesList = toArray(head);
  let myStack = new Stack();
  
  let currentIndex = nodeValuesList.length - 1;
  let currentValue = nodeValuesList[currentIndex];

  while (currentIndex >= 0) {

    while (myStack.isEmpty() === false && currentValue >= myStack.top()) {
      myStack.pop();
    }

    if (myStack.isEmpty() === true) {
      outputList[currentIndex] = 0;
    }
    else {
      outputList[currentIndex] = myStack.top();
    }
    
    myStack.push(currentValue);
    currentIndex--;
    currentValue = nodeValuesList[currentIndex];
  }
  
  return outputList;
}