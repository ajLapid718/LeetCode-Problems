# Given a binary tree, find its maximum depth.
# The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

# My solution with a runtime of 68ms
def max_depth(root)
  return 0 if root.nil?

  left_depth = max_depth(root.left)
  right_depth = max_depth(root.right)

  (left_depth > right_depth ? left_depth : right_depth) + 1
end

# Top solution with a runtime of 56ms
def max_depth(root)
  return 0 if root.nil?
  [max_depth(root.left), max_depth(root.right)].max + 1
end
