# Given an array and a value, remove all instances of that value in place and return the new length.

# Do not allocate extra space for another array, you must do this in place with constant memory.

# The order of elements can be changed. It doesn't matter what you leave beyond the new length.

# Example:
# Given input array nums = [3,2,2,3], val = 3

# Your function should return length = 2, with the first two elements of nums being 2.

# My solution with a runtime of 59ms

def remove_element(nums, val)
  nums.tap { |op| op.delete(val) }.size
end

# Top solution with a runtime of 49ms and does not invoke delete
# It's a good thing to do a lot with a little in some cases, especially when demonstrating fundamentals
# So I plan on stepping through this function and get a deeper understanding of what's going on

def remove_element(nums, val)
  slider = 0
  point = 0

  while slider < nums.length
    if nums[slider] != val
      nums[point] = nums[slider]
      point += 1
    end
    slider += 1
  end

  point
end
