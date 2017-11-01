Given a sorted linked list, delete all duplicates such that each element appear only once.

For example,
Given 1->1->2, return 1->2.
Given 1->1->2->3->3, return 1->2->3.

# My Solution

def delete_duplicates(head)
  return [] if head.nil?
  current_node = head

  until current_node.next == nil
    if current_node.val == current_node.next.val
      current_node.next = current_node.next.next
    else
      current_node = current_node.next
    end
  end

  return head
end
