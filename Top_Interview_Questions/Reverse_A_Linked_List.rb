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

  until current_node == nil # This line traverses the entire singly-linked list; this involves reversing the nodes through each iteration in an as-we-go manner.
      next_node = current_node.next # It is semantic; the next node is set to point to the value that the current node's #next would output.
      current_node.next = previous_node # Set the actual next node to point toward the previous node.

      previous_node = current_node # Set the previous node to point toward the actual current node at hand...which is going to become the new previous node for the next iteration.
      current_node = next_node # Set the current node to point toward the next node; in a swap, the current_node does become the next_node. This allows us to move on. The next iteration will have this as a starting point.
  end # After all of this, the end of the linked list has been reached. Ultimately, the original tail needs to become the new head.

  head = previous_node # At the end, by doing this, the new head tail replaces the original tail. Therefore, the linked list has been reversed.
end

nil -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> nil

[x] the previous node, relative to the head with the data (1), is nil
[x] it is prudent to start at the head of a linked list in this case, so the very first current_node, which will change as-we-go, is the head (1)
[x] we'll need to traverse the entire singly linked list, which means we'll need a stopping point; after (6) we have value of nil and this is the stopping point for the until loop
[x] we need a variable (next_node) to consistently point toward the value of the following node (2); with this, we can hold a stable reference to the proper starting point for the next run-through of the loop
[x] we need the actual following node (2) to be set with a value of the previous_node (nil); this is necessary because everything in a linked list points toward something ahead of it...so this redirects that arrow so-to-speak
[x] we need to do some cleanup and preparation for the next iteration in the spirit of foresight; the previous_node is set as the current_node (1) at hand
[x] we need to do some more cleanup and preparation...the current_node for the next run-through (2) will be set to the next_node, which was holding/pointing to the value in the beginning and is unaffected by the changes that just took place	
[x] the final touch is to set (the original tail) whatever was the last node (previous_node) as the new head (6)

nil -> 6 -> 5 -> 4 -> 3 -> 2 -> 1 -> nil