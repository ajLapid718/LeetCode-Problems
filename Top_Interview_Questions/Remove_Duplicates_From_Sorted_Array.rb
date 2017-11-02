# Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.

# Do not allocate extra space for another array, you must do this in place with constant memory.

# For example:

# Given input array nums = [1,1,2].
# Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
# It doesn't matter what you leave beyond the new length.

# The Ruby Way

def remove_duplicates(nums)
  nums.uniq!
  return nums.length
end

# The More General Way

def remove_duplicates(nums)
  counter = 0
  original_length = nums.length

  (1...nums.length).each do |i|
    if nums[i-1] == nums[i]
      counter += 1
    else
      nums[i-counter] = nums[i]
    end
  end

  return original_length - counter
end

# The More General Way (Annotated)

def remove_duplicates(nums)
  counter = 0 # Establish a counter variable to keep track of the amount of duplicates
  original_length = nums.length # Hold a reference to the original length of the array because the array without duplicates will have less elements

  (1...nums.length).each do |i| # Iterate through the elements; there's no need to go to the end, where we'd end up with nil values since the value of the length of the array is going to hold an index out of bounds
    if nums[i-1] == nums[i] # Check to see if the element behind the current element and the current element are equivalent/duplicates
      counter += 1 # We only need to increment the counter because we've found a duplicate; nothing more and nothing less
    else
      nums[i-counter] = nums[i] # If two numbers are different from each other, push the current element as far back as the position of the last duplicated element; the streak of duplicates has ended and we've found a solo element; remember the arrays are sorted
    end
  end

  return original_length - counter # Return the new length by subtracting the amount of duplicates the array contained from the original_length
end
