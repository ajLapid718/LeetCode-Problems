# Task: Reverse a singly linked list.

# Definition for singly-linked list below:

# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

def reverse_list(head)
  previous_node = nil # There is nothing behind the initial head, so we reasonably declare the previous_node with a value of nil.
  current_node = head # The first current_node is the original head, which is a reasonable starting point.

  until current_node == nil # This line traverses the entire singly-linked list; this involves reversing the nodes through each iteration.
      next_node = current_node.next # It is semantic; the next node is set to point to the value that the current node's #next would output.
      current_node.next = previous_node # Set the actual next node to point toward the previous node.

      previous_node = current_node # Set the previous node (next node) to point toward the current node, which is now the previous node.
      current_node = next_node # Set the current node to point toward the next node; in a swap, the current_node does become the next_node. This allows us to move on.
  end # After all of this, the end of the linked list has been reached. Ultimately, the original tail needs to become the new head.

  head = previous_node # At the end, by declaring the head with the value of the previous_node, the tail becomes the new head.
end
