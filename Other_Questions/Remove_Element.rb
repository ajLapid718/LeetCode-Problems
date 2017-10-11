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
# So I plan on stepping through this function to get a deeper understanding of what's going on

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

# It's important for me to really understand the nature of the problem's prompt.
# As long as we output a proper length (number of elements that are not the targeted value) and as long as the first length_amount of elements are the non-targeted elements...
# ...then the objective is met. The value of nums[slider] is the array's nth element. The slider will run the whole time, as the faster tally. The point will only increment
# upon hitting a non-targeted number. Then, the elements behind this position will be set as the non-targeted-num aka nums[slider].

# In other words: if the nth element != targeted_value, then move this non-targeted-num to the beginning. Nice.
# I need to get a better grasp of implementing through these constraints of in-place, constant space, etc.
# The intuition is developing when it comes to feeling out if a flag can be helpful/toggled. Just need to lock in more, and it begins with understanding the problem fully and thoroughly.

def remove_element(nums, val)
  current_spot = 0
  reserved_spots = 0

  while current_spot < nums.length
    if nums[current_spot] != val
      nums[reserved_spots] = nums[current_spot]
      reserved_spots += 1
    end
    current_spot += 1
  end

  reserved_spots
end

# Refactored the code for better readability for myself and hopefully for anyone viewing this
# Reserved spots open for a non-targeted-num once a non-targeted-num is encountered
# The amount of reserved_spots will then be the length of non-targeted-nums
# The line that reads: nums[reserved_spots] = nums[current_spot] is when the reserved_spot is populated with the current_num which != targeted_value
